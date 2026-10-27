import { cursos } from "../../data/trajetoria";
import { getImagePath } from "../../utils/helpers";

export default function CoursesCertifications() {
    return (
        <section className="cursos-section">
            <h2 className="section-subtitle">
                <i className="bi bi-patch-check-fill"></i>
                Cursos & Certificações
            </h2>

            <div className="cursos-grid">
                {cursos.map((curso) => (
                    <div key={curso.nome} className={`curso-card${curso.certificado ? " curso-card-destaque" : ""}`}>
                        <div className="curso-icon">
                            <i className={`bi ${curso.icone} ${curso.classeIcone}`}></i>
                        </div>
                        <div className="curso-info">
                            <h3>{curso.nome}</h3>
                            <span className="curso-duracao">{curso.duracao}</span>
                            <span className="curso-plataforma">{curso.plataforma}</span>
                            {curso.conteudos && (
                                <details className="curso-conteudos">
                                    <summary>Conteúdo aprendido</summary>
                                    <ul>
                                        {curso.conteudos.map((conteudo) => (
                                            <li key={conteudo.titulo}>
                                                <strong>{conteudo.titulo}:</strong> {conteudo.descricao}
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            )}
                            {curso.certificado && (
                                <a className="curso-certificado" href={getImagePath(curso.certificado)} target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-file-earmark-pdf" aria-hidden="true"></i>
                                    Ver certificado
                                    <span className="visually-hidden"> de {curso.nome} (abre em nova aba)</span>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
