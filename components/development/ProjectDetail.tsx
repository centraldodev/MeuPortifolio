import Link from "next/link";
import { Projeto, projetos } from "../../data/projects";
import ProjectImage from "./ProjectImage";
import ProjectBadges from "./ProjectBadges";
import "./projects.css";

export default function ProjectDetail({ projeto }: { projeto: Projeto }) {
    const indice = projetos.findIndex((p) => p.id === projeto.id);
    const proximo = projetos[(indice + 1) % projetos.length];

    return (
        <article className="page-container projeto-detalhe">
            <Link href="/projetos" className="voltar-link">
                <i className="bi bi-arrow-left"></i> Todos os projetos
            </Link>

            <header className="detalhe-header">
                <div className="detalhe-imagem">
                    <ProjectImage projeto={projeto} sizes="(max-width: 900px) 100vw, 420px" priority />
                </div>

                <div className="detalhe-intro">
                    <ProjectBadges projeto={projeto} />
                    <h1 className="detalhe-titulo">{projeto.nome}</h1>
                    <p className="detalhe-descricao">{projeto.descricao}</p>

                    <div className="detalhe-acoes">
                        {projeto.link ? (
                            <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="btn-acessar">
                                <i className="bi bi-box-arrow-up-right"></i>
                                Acessar projeto
                            </a>
                        ) : (
                            <span className="acao-indisponivel">
                                <i className="bi bi-hourglass-split"></i>
                                Ainda sem versão pública
                            </span>
                        )}
                        <span className="acao-indisponivel">
                            <i className="bi bi-lock-fill"></i>
                            Código privado, posso apresentar em entrevista
                        </span>
                    </div>
                </div>
            </header>

            <div className="detalhe-colunas">
                <section className="detalhe-bloco">
                    <h2 className="section-subtitle">
                        <i className="bi bi-stars"></i>
                        Funcionalidades
                    </h2>
                    <ul className="detalhe-lista">
                        {projeto.funcionalidades.map((item) => (
                            <li key={item}>
                                <i className="bi bi-check2-circle"></i>
                                {item}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="detalhe-bloco">
                    <h2 className="section-subtitle">
                        <i className="bi bi-cpu-fill"></i>
                        Destaques técnicos
                    </h2>
                    <ul className="detalhe-lista">
                        {projeto.destaquesTecnicos.map((item) => (
                            <li key={item}>
                                <i className="bi bi-code-slash"></i>
                                {item}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            <section className="detalhe-stack">
                <h2 className="section-subtitle">
                    <i className="bi bi-layers-fill"></i>
                    Tecnologias
                </h2>
                <div className="projeto-tecnologias">
                    {projeto.tecnologias.map((tech) => (
                        <span key={tech} className="tech-tag">
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            <Link href={`/projetos/${proximo.id}`} className="proximo-projeto">
                <span>Próximo projeto</span>
                <strong>
                    {proximo.nome} <i className="bi bi-arrow-right"></i>
                </strong>
            </Link>
        </article>
    );
}
