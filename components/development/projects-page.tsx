"use client";
import { useState } from "react";
import PageContainer from "../PageContainer";
import ProjectCard from "./ProjectCard";
import { projetos, Plataforma } from "../../data/projects";
import "./projects.css";

const filtros: ("Todos" | Plataforma)[] = ["Todos", "Web", "Mobile", "Desktop"];

export default function ProjectsPage() {
    const [filtro, setFiltro] = useState<(typeof filtros)[number]>("Todos");
    const visiveis = filtro === "Todos" ? projetos : projetos.filter((p) => p.plataformas.includes(filtro));

    return (
        <PageContainer title="Projetos">
            <p className="intro-text">
                Aplicações que desenvolvi do zero, da interface ao deploy: apps publicados, um projeto em produção
                para cliente e projetos com IA e Python. Clique em um projeto para ver os detalhes.
            </p>

            <div className="projetos-filtros" role="group" aria-label="Filtrar por plataforma">
                {filtros.map((f) => (
                    <button
                        key={f}
                        type="button"
                        className={`filtro-btn ${filtro === f ? "ativo" : ""}`}
                        aria-pressed={filtro === f}
                        onClick={() => setFiltro(f)}
                    >
                        {f}
                        <span className="filtro-contagem">
                            {f === "Todos" ? projetos.length : projetos.filter((p) => p.plataformas.includes(f)).length}
                        </span>
                    </button>
                ))}
            </div>

            <div className="projetos-grid">
                {visiveis.map((projeto) => (
                    <ProjectCard key={projeto.id} projeto={projeto} titulo="h2" />
                ))}
            </div>
        </PageContainer>
    );
}
