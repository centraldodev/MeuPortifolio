import { carreira } from "../../data/trajetoria";

export default function CareerTimeline() {
    return (
        <section className="experiencia-section">
            <h2 className="section-subtitle">
                <i className="bi bi-signpost-split-fill"></i>
                Linha do Tempo
            </h2>

            <div className="timeline">
                {carreira.map((etapa) => (
                    <div key={etapa.cargo} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3>{etapa.cargo}</h3>
                            <span className="timeline-empresa">{etapa.contexto}</span>
                            <span className="timeline-periodo">{etapa.periodo}</span>
                            <ul className="timeline-lista">
                                {etapa.atividades.map((atividade) => (
                                    <li key={atividade}>{atividade}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
