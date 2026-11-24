# Currículos

Dois currículos separados, cada um focado em um tipo de vaga:

| Fonte | PDF gerado | Uso |
|---|---|---|
| `index.html` | `public/Natanael-Ramos-Curriculo.pdf` | **Desenvolvedor.** É o PDF do botão "Currículo" do portfólio |
| `infraestrutura.html` | `curriculo/Natanael-Ramos-Curriculo-Infraestrutura.pdf` | **Infraestrutura e redes.** Fica fora de `public/` e não é publicado no site |

1. Edite o HTML (abra no navegador para ver como fica).
2. Gere os PDFs:

   ```bash
   npm run curriculo
   ```

3. Faça commit dos HTML e dos PDFs juntos.

O layout é uma página A4. Se o texto crescer demais, o fim da página é cortado: confira o PDF depois de gerar.
