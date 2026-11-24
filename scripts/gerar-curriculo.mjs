// Gera os currículos em PDF a partir dos HTML em curriculo/
// usando o Chrome/Edge instalado no computador (modo headless).
// Uso: npm run curriculo
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const navegadores = [
    process.env.CHROME_PATH,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
].filter(Boolean);

const navegador = navegadores.find((caminho) => existsSync(caminho));
if (!navegador) {
    console.error("Chrome não encontrado. Defina CHROME_PATH com o caminho do navegador.");
    process.exit(1);
}

const curriculos = [
    // Desenvolvedor: é o PDF do botão "Currículo" do portfólio
    { origem: "curriculo/index.html", destino: "public/Natanael-Ramos-Curriculo.pdf" },
    // Infraestrutura: fica fora de public/, não é publicado no site
    { origem: "curriculo/infraestrutura.html", destino: "curriculo/Natanael-Ramos-Curriculo-Infraestrutura.pdf" },
];

for (const { origem, destino } of curriculos) {
    execFileSync(navegador, [
        "--headless",
        "--disable-gpu",
        "--no-pdf-header-footer",
        // dá tempo para o Tailwind (CDN) e as fontes carregarem antes de imprimir
        "--virtual-time-budget=10000",
        `--print-to-pdf=${resolve(destino)}`,
        pathToFileURL(resolve(origem)).href,
    ], { stdio: "ignore" });

    console.log(`Currículo gerado em ${resolve(destino)}`);
}
