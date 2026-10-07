import { formacoes } from "../../data/trajetoria";

const statusLabel = {
    "em-andamento": "Em Andamento",
    concluido: "Concluído"
};

export default function AcademicEducation() {
    return (
        <section className="formacao-section">
            <h2 className="section-subtitle">
                <i className="bi bi-book-fill"></i>
                Formação Acadêmica
            </h2>

            <div className="formacao-grid">
                {formacoes.map((formacao) => (
                    <div key={formacao.curso} className="formacao-card">
                        <div className="formacao-icon">
                            <i className={`bi ${formacao.icone}`}></i>
                        </div>
                        <div className="formacao-info">
                            <h3>{formacao.curso}</h3>
                            <span className={`formacao-status ${formacao.status}`}>{statusLabel[formacao.status]}</span>
                            <span className="formacao-periodo">{formacao.periodo}</span>
                            <span className="formacao-instituicao">{formacao.instituicao}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
