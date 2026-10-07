import Link from "next/link";

import { Projeto } from "../../data/projects";
import ProjectImage from "./ProjectImage";
import ProjectBadges from "./ProjectBadges";

interface ProjectCardProps {
    projeto: Projeto;
    /** Nível do título, para manter a hierarquia certa onde o card aparece */
    titulo?: "h2" | "h3";
}

export default function ProjectCard({ projeto, titulo: Titulo = "h3" }: ProjectCardProps) {
    return (
        <article className={`projeto-card ${projeto.destaque ? "destaque" : ""}`}>
            {projeto.destaque && (
                <div className="destaque-badge">
                    <i className="bi bi-star-fill"></i>
                    <span>{projeto.destaque}</span>
                </div>
            )}

            <Link href={`/projetos/${projeto.id}`} className="projeto-link">
                <ProjectImage
                    projeto={projeto}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="projeto-conteudo">
                    <ProjectBadges projeto={projeto} />
                    <Titulo className="projeto-nome">{projeto.nome}</Titulo>
                    <p className="projeto-descricao">{projeto.resumo}</p>

                    <div className="projeto-tecnologias">
                        {projeto.tecnologias.slice(0, 5).map((tech) => (
                            <span key={tech} className="tech-tag">
                                {tech}
                            </span>
                        ))}
                        {projeto.tecnologias.length > 5 && (
                            <span className="tech-tag tech-tag-mais">+{projeto.tecnologias.length - 5}</span>
                        )}
                    </div>

                    <span className="projeto-ver-mais">
                        Ver detalhes <i className="bi bi-arrow-right"></i>
                    </span>
                </div>
            </Link>
        </article>
    );
}
