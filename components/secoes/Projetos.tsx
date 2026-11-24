"use client";
import { useState } from "react";

import { projetos, Plataforma } from "../../data/projects";
import ProjectCard from "../projetos/ProjectCard";
import SecaoTitulo from "./SecaoTitulo";

const filtros: ("Todos" | Plataforma)[] = ["Todos", "Web", "Mobile"];

const contar = (f: (typeof filtros)[number]) =>
    f === "Todos" ? projetos.length : projetos.filter((p) => p.plataformas.includes(f)).length;

export default function Projetos() {
    const [filtro, setFiltro] = useState<(typeof filtros)[number]>("Todos");
    const visiveis = filtro === "Todos" ? projetos : projetos.filter((p) => p.plataformas.includes(filtro));

    return (
        <section id="projetos" className="secao secao-clara">
            <div className="container">
                <SecaoTitulo rotulo="Projetos" titulo="O que eu já construí">
                    Aplicações feitas do zero, da interface ao deploy: apps publicados e duas plataformas em
                    produção, uma delas para cliente.
                </SecaoTitulo>

                <div className="filtros" role="group" aria-label="Filtrar projetos por plataforma">
                    {filtros.map((f) => (
                        <button
                            key={f}
                            type="button"
                            className={`filtro ${filtro === f ? "ativo" : ""}`}
                            aria-pressed={filtro === f}
                            onClick={() => setFiltro(f)}
                        >
                            {f}
                            <span className="filtro-contagem">{contar(f)}</span>
                        </button>
                    ))}
                </div>

                <div className="projetos-grade">
                    {visiveis.map((projeto) => (
                        <ProjectCard key={projeto.id} projeto={projeto} />
                    ))}
                </div>
            </div>
        </section>
    );
}
