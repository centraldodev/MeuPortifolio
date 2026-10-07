// Gera public/Natanael-Ramos-Curriculo.pdf a partir de curriculo/index.html
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

const origem = pathToFileURL(resolve("curriculo/index.html")).href;
const destino = resolve("public/Natanael-Ramos-Curriculo.pdf");

execFileSync(navegador, [
    "--headless",
    "--disable-gpu",
    "--no-pdf-header-footer",
    // dá tempo para o Tailwind (CDN) e as fontes carregarem antes de imprimir
    "--virtual-time-budget=10000",
    `--print-to-pdf=${destino}`,
    origem,
], { stdio: "ignore" });

console.log(`Currículo gerado em ${destino}`);
