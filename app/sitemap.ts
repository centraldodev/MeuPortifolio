import type { MetadataRoute } from "next";
import { siteUrl } from "../config/site.config";
import { projetos } from "../data/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: `${siteUrl}/`, priority: 1 },
        ...projetos.map((projeto) => ({
            url: `${siteUrl}/projetos/${projeto.id}/`,
            priority: 0.7,
        })),
    ];
}
