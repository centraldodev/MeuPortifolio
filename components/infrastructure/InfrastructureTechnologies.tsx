import { infraCategorias } from "../../data/trajetoria";

export default function InfrastructureTechnologies() {
    return (
        <section className="infra-section">
            <h2 className="section-subtitle">
                <i className="bi bi-hdd-network-fill"></i>
                Conhecimentos em Infraestrutura
            </h2>

            <div className="infra-grid">
                {infraCategorias.map((categoria, index) => (
                    <div key={categoria.titulo} className={`infra-card infra-card-${index}`}>
                        <div className="infra-card-header">
                            <div className="infra-icon">
                                <i className={`bi ${categoria.icone}`}></i>
                            </div>
                            <h3 className="infra-titulo">{categoria.titulo}</h3>
                        </div>
                        <div className="infra-itens">
                            {categoria.itens.map((item) => (
                                <span key={item} className="infra-item">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
