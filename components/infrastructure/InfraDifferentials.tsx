import { diferenciais } from "../../data/trajetoria";

export default function InfraDifferentials() {
    return (
        <section className="diferenciais-section">
            <h2 className="section-subtitle">
                <i className="bi bi-plus-circle-fill"></i>
                O que a infra agrega ao meu código
            </h2>

            <div className="cursos-grid diferenciais-grid">
                {diferenciais.map((item) => (
                    <div key={item.titulo} className="curso-card diferencial-card">
                        <div className="curso-icon">
                            <i className={`bi ${item.icone}`}></i>
                        </div>
                        <div className="curso-info">
                            <h3>{item.titulo}</h3>
                            <p>{item.descricao}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
