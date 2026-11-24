import { tecnologias, categorias } from "../../data/technologies";
import TechIcon from "../TechIcon";
import SecaoTitulo from "./SecaoTitulo";

// Ícones brancos somem no fundo claro: esses usam o azul-marinho do site
const corNoClaro = (cor: string) => (cor.toLowerCase() === "#ffffff" ? "var(--marinho)" : cor);

export default function Habilidades() {
    const chaves = Object.keys(categorias) as (keyof typeof categorias)[];

    return (
        <section id="habilidades" className="secao">
            <div className="container">
                <SecaoTitulo rotulo="Habilidades" titulo="Stack do dia a dia" centralizado>
                    Linguagens, frameworks e serviços que uso para construir e publicar meus projetos.
                </SecaoTitulo>

                <div className="habilidades-grade">
                    {chaves.map((chave) => (
                        <div key={chave} className="cartao">
                            <h3 className="cartao-titulo">
                                <span className="icone-bloco">
                                    <i className={`bi ${categorias[chave].icone}`} aria-hidden="true"></i>
                                </span>
                                {categorias[chave].titulo}
                            </h3>
                            <ul className="tech-lista">
                                {tecnologias
                                    .filter((tech) => tech.categoria === chave)
                                    .map((tech) => (
                                        <li
                                            key={tech.nome}
                                            title={tech.descricao}
                                            style={{ "--tech-cor": corNoClaro(tech.cor) } as React.CSSProperties}
                                        >
                                            <TechIcon
                                                icone={tech.icone}
                                                className={`tech-icone ${tech.icone.includes("wordmark") ? "wordmark" : ""}`}
                                            />
                                            {tech.nome}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
