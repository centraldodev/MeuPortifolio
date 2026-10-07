import { experiencias } from "../../config/site.config";
import Link from "next/link";

export default function HomeExperiencias() {
    return (
        <section className="experience-section" id="experiencia">
            <h2 className="section-title">
                <i className="bi bi-briefcase-fill"></i>
                Experiência
            </h2>

            <div className="experience-grid">
                {experiencias.map((exp) => (
                    <Link
                        key={exp.area}
                        href={exp.href}
                        className="experience-card clickable"
                        style={{ "--card-color": exp.cor } as React.CSSProperties}
                    >
                        <div className="exp-icon">
                            <i className={`bi ${exp.icone}`}></i>
                        </div>
                        <div className="exp-content">
                            <h3 className="exp-area">
                                {exp.area}
                                <i className="bi bi-arrow-right-circle ms-2"></i>
                            </h3>
                            <span className="exp-tempo">{exp.tempo}</span>
                            <p className="exp-descricao">{exp.descricao}</p>
                            <div className="exp-tags">
                                {exp.tags.map((tag) => (
                                    <span key={tag} className="exp-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
