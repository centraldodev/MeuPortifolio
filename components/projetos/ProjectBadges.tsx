import { Projeto } from "../../data/projects";

const statusClasse: Record<string, string> = {
    "Em produção": "status-producao",
    Publicado: "status-publicado",
    "Em desenvolvimento": "status-desenvolvimento",
};

const plataformaIcone = {
    Web: "bi-globe2",
    Mobile: "bi-phone",
    Desktop: "bi-laptop",
};

export default function ProjectBadges({ projeto }: { projeto: Projeto }) {
    return (
        <div className="projeto-selos">
            <span className={`selo-status ${statusClasse[projeto.status] ?? ""}`}>{projeto.status}</span>
            {projeto.plataformas.map((plataforma) => (
                <span key={plataforma} className="selo-plataforma">
                    <i className={`bi ${plataformaIcone[plataforma]}`} aria-hidden="true"></i>
                    {plataforma}
                </span>
            ))}
        </div>
    );
}
