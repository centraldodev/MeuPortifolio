import { experience } from "../../config/site.config";
import { carreira, cursos, diferenciais, formacoes } from "../../data/trajetoria";
import { getImagePath } from "../../utils/helpers";
import SecaoTitulo from "./SecaoTitulo";

const statusFormacao = { "em-andamento": "Em andamento", concluido: "Concluído" };

export default function Trajetoria() {
    return (
        <section id="trajetoria" className="secao secao-clara">
            <div className="container">
                <SecaoTitulo rotulo="Trajetória" titulo="Da infraestrutura ao código">
                    Comecei na infraestrutura de TI e hoje sou desenvolvedor. Os {experience.infraYears} anos em
                    redes e servidores me dão uma visão completa de como uma aplicação funciona em produção.
                </SecaoTitulo>

                <div className="trajetoria-colunas">
                    <ol className="linha-tempo">
                        {carreira.map((etapa) => (
                            <li key={etapa.cargo} className="cartao">
                                <span className="linha-tempo-periodo">{etapa.periodo}</span>
                                <h3>{etapa.cargo}</h3>
                                <p className="linha-tempo-contexto">{etapa.contexto}</p>
                                <ul className="lista-check">
                                    {etapa.atividades.map((atividade) => (
                                        <li key={atividade}>{atividade}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ol>

                    <div className="trajetoria-lateral">
                        <div>
                            <h3 className="subtitulo">O que a infra agrega ao meu código</h3>
                            <div className="diferenciais">
                                {diferenciais.map((item) => (
                                    <div key={item.titulo} className="cartao diferencial">
                                        <span className="icone-bloco">
                                            <i className={`bi ${item.icone}`} aria-hidden="true"></i>
                                        </span>
                                        <h4>{item.titulo}</h4>
                                        <p>{item.descricao}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="subtitulo">Formação</h3>
                            <ul className="lista-cartoes">
                                {formacoes.map((f) => (
                                    <li key={f.curso} className="cartao item-linha">
                                        <span className="icone-bloco">
                                            <i className={`bi ${f.icone}`} aria-hidden="true"></i>
                                        </span>
                                        <div>
                                            <h4>{f.curso}</h4>
                                            <p>
                                                {f.instituicao} · {f.periodo}
                                            </p>
                                        </div>
                                        <span
                                            className={`selo-status ${f.status === "concluido" ? "status-publicado" : "status-desenvolvimento"}`}
                                        >
                                            {statusFormacao[f.status]}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <h3 className="subtitulo">Cursos e certificações</h3>
                <ul className="cursos-grade">
                    {cursos.map((curso) => (
                        <li key={curso.nome} className="cartao item-linha">
                            <span className="icone-bloco">
                                <i className={`bi ${curso.icone}`} aria-hidden="true"></i>
                            </span>
                            <div>
                                <h4>{curso.nome}</h4>
                                <p>
                                    {curso.plataforma} · {curso.duracao}
                                </p>
                                {curso.conteudos && (
                                    <details className="curso-conteudos">
                                        <summary>Conteúdo do curso</summary>
                                        <ul>
                                            {curso.conteudos.map((c) => (
                                                <li key={c.titulo}>
                                                    <strong>{c.titulo}:</strong> {c.descricao}
                                                </li>
                                            ))}
                                        </ul>
                                    </details>
                                )}
                                {curso.certificado && (
                                    <a
                                        className="link-certificado"
                                        href={getImagePath(curso.certificado)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="bi bi-file-earmark-pdf" aria-hidden="true"></i>
                                        Ver certificado
                                        <span className="visualmente-oculto"> de {curso.nome} (abre em nova aba)</span>
                                    </a>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
