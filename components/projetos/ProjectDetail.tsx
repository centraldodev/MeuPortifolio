import Link from "next/link";
import { Projeto, projetos } from "../../data/projects";
import ProjectImage from "./ProjectImage";
import ProjectBadges from "./ProjectBadges";
import LinkSecao from "../layout/LinkSecao";

export default function ProjectDetail({ projeto }: { projeto: Projeto }) {
    const indice = projetos.findIndex((p) => p.id === projeto.id);
    const proximo = projetos[(indice + 1) % projetos.length];

    return (
        <article className="detalhe">
            <div className="detalhe-topo">
                <div className="container">
                    <LinkSecao secao="projetos" className="voltar-link">
                        <i className="bi bi-arrow-left" aria-hidden="true"></i> Todos os projetos
                    </LinkSecao>

                    <div className="detalhe-cabecalho">
                        <div className="detalhe-intro">
                            <ProjectBadges projeto={projeto} />
                            <h1>{projeto.nome}</h1>
                            <p>{projeto.descricao}</p>

                            <div className="detalhe-acoes">
                                {projeto.link ? (
                                    <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="botao botao-azul">
                                        Acessar projeto
                                    </a>
                                ) : (
                                    <span className="aviso-suave">
                                        <i className="bi bi-hourglass-split" aria-hidden="true"></i>
                                        Ainda sem versão pública
                                    </span>
                                )}
                                <span className="aviso-suave">
                                    <i className="bi bi-lock-fill" aria-hidden="true"></i>
                                    Código privado, posso apresentar em entrevista
                                </span>
                            </div>
                        </div>

                        <div className="detalhe-imagem">
                            <ProjectImage projeto={projeto} sizes="(max-width: 900px) 100vw, 460px" priority />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container detalhe-corpo">
                <div className="detalhe-colunas">
                    <section className="cartao">
                        <h2 className="cartao-titulo">
                            <span className="icone-bloco"><i className="bi bi-stars" aria-hidden="true"></i></span>
                            Funcionalidades
                        </h2>
                        <ul className="lista-check">
                            {projeto.funcionalidades.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="cartao">
                        <h2 className="cartao-titulo">
                            <span className="icone-bloco"><i className="bi bi-cpu" aria-hidden="true"></i></span>
                            Destaques técnicos
                        </h2>
                        <ul className="lista-check">
                            {projeto.destaquesTecnicos.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </section>
                </div>

                <section className="cartao">
                    <h2 className="cartao-titulo">
                        <span className="icone-bloco"><i className="bi bi-layers" aria-hidden="true"></i></span>
                        Tecnologias
                    </h2>
                    <ul className="tags">
                        {projeto.tecnologias.map((tech) => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </ul>
                </section>

                <Link href={`/projetos/${proximo.id}`} className="proximo-projeto">
                    <span>Próximo projeto</span>
                    <strong>
                        {proximo.nome} <i className="bi bi-arrow-right" aria-hidden="true"></i>
                    </strong>
                </Link>
            </div>
        </article>
    );
}
