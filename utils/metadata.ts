import type { Metadata } from "next";
import { profile, siteUrl } from "../config/site.config";

/**
 * Metadados de uma página interna: título, descrição e prévia de compartilhamento
 * (LinkedIn, WhatsApp) apontando para a própria página, com a imagem padrão do site.
 */
export function paginaMetadata(titulo: string, descricao: string, caminho: string): Metadata {
    return {
        title: titulo,
        description: descricao,
        openGraph: {
            type: "website",
            locale: "pt_BR",
            siteName: profile.name,
            title: `${titulo} | ${profile.name}`,
            description: descricao,
            url: `${siteUrl}${caminho}`,
            images: [{ url: `${siteUrl}/opengraph-image.png`, width: 1200, height: 630 }],
        },
    };
}
