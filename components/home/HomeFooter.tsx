import { experience } from "../../config/site.config";

export default function HomeFooter() {
    return (
        <section className="stats-section">
            <div className="stat-card">
                <span className="stat-number">{experience.projectCount}</span>
                <span className="stat-label">Projetos Desenvolvidos</span>
            </div>
            <div className="stat-card">
                <span className="stat-number">{experience.devYears}+</span>
                <span className="stat-label">Ano em Desenvolvimento</span>
            </div>
            <div className="stat-card">
                <span className="stat-number">{experience.totalYears}+</span>
                <span className="stat-label">Anos em TI</span>
            </div>
            <div className="stat-card">
                <span className="stat-number">{experience.infraYears}</span>
                <span className="stat-label">Anos em Infraestrutura</span>
            </div>
        </section>
    );
}
