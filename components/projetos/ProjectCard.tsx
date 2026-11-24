import Link from "next/link";

import { Projeto } from "../../data/projects";
import ProjectImage from "./ProjectImage";
import ProjectBadges from "./ProjectBadges";

export default function ProjectCard({ projeto }: { projeto: Projeto }) {
    return (
        <article className="projeto-card">
            <Link href={`/projetos/${projeto.id}`} className="projeto-card-link">
                <div className="projeto-card-imagem">
                    <ProjectImage
                        projeto={projeto}
                        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 380px"
                    />
                    {projeto.destaque && (
                        <span className="projeto-destaque">
                            <i className="bi bi-star-fill" aria-hidden="true"></i>
                            {projeto.destaque}
                        </span>
                    )}
                </div>

                <div className="projeto-card-corpo">
                    <ProjectBadges projeto={projeto} />
                    <h3>{projeto.nome}</h3>
                    <p>{projeto.resumo}</p>

                    <ul className="tags" aria-label="Tecnologias">
                        {projeto.tecnologias.slice(0, 4).map((tech) => (
                            <li key={tech}>{tech}</li>
                        ))}
                        {projeto.tecnologias.length > 4 && <li>+{projeto.tecnologias.length - 4}</li>}
                    </ul>

                    <span className="projeto-ver-mais">
                        Ver detalhes <i className="bi bi-arrow-right" aria-hidden="true"></i>
                    </span>
                </div>
            </Link>
        </article>
    );
}
