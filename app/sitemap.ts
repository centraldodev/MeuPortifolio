import type { MetadataRoute } from "next";
import { siteUrl, menuItems } from "../config/site.config";
import { projetos } from "../data/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const paginas = menuItems.map((item) => ({
        url: `${siteUrl}${item.href === "/" ? "/" : `${item.href}/`}`,
        priority: item.href === "/" ? 1 : 0.8,
    }));

    const paginasProjetos = projetos.map((projeto) => ({
        url: `${siteUrl}/projetos/${projeto.id}/`,
        priority: 0.7,
    }));

    return [...paginas, ...paginasProjetos];
}
