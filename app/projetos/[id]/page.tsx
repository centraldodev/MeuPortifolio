import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projetos } from "../../../data/projects";
import { paginaMetadata } from "../../../utils/metadata";
import ProjectDetail from "../../../components/development/ProjectDetail";

export const dynamicParams = false;

export function generateStaticParams() {
    return projetos.map((projeto) => ({ id: projeto.id }));
}

export async function generateMetadata({ params }: PageProps<"/projetos/[id]">): Promise<Metadata> {
    const { id } = await params;
    const projeto = projetos.find((p) => p.id === id);
    if (!projeto) return {};

    return paginaMetadata(projeto.nome, projeto.resumo, `/projetos/${projeto.id}/`);
}

export default async function Page({ params }: PageProps<"/projetos/[id]">) {
    const { id } = await params;
    const projeto = projetos.find((p) => p.id === id);
    if (!projeto) notFound();

    return <ProjectDetail projeto={projeto} />;
}
