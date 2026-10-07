import { cursos } from "../../data/trajetoria";

export default function CoursesCertifications() {
    return (
        <section className="cursos-section">
            <h2 className="section-subtitle">
                <i className="bi bi-patch-check-fill"></i>
                Cursos & Certificações
            </h2>

            <div className="cursos-grid">
                {cursos.map((curso) => (
                    <div key={curso.nome} className="curso-card">
                        <div className="curso-icon">
                            <i className={`bi ${curso.icone} ${curso.classeIcone}`}></i>
                        </div>
                        <div className="curso-info">
                            <h3>{curso.nome}</h3>
                            <span className="curso-duracao">{curso.duracao}</span>
                            <span className="curso-plataforma">{curso.plataforma}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
