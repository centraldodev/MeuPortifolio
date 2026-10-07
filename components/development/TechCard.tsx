import { Tecnologia } from "../../data/technologies";
import TechIcon from "./TechIcon";

interface TechCardProps {
    tech: Tecnologia;
    isActive: boolean;
    isDescriptionVisible: boolean;
    onClick: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

export default function TechCard({
    tech,
    isActive,
    isDescriptionVisible,
    onClick,
    onMouseEnter,
    onMouseLeave
}: TechCardProps) {
    const isWordmarkIcon = tech.icone.includes("wordmark");
    return (
        <div
            className={`tech-card ${isActive ? "active" : ""}`}
            style={{ "--tech-color": tech.cor } as React.CSSProperties}
            onClick={onClick}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onClick();
                }
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            role="button"
            tabIndex={0}
            aria-expanded={isDescriptionVisible}
        >
            <div className="tech-icon-wrapper">
                <TechIcon
                    icone={tech.icone}
                    className={`tech-icon tech-icon-colored ${isWordmarkIcon ? "tech-icon-wordmark" : ""}`}
                />
            </div>

            <h3 className="tech-nome">{tech.nome}</h3>

            <div className={`tech-tooltip ${isActive ? "visible" : ""}`}>
                <div className="tooltip-content">
                    <div className="tooltip-header">
                        <TechIcon
                            icone={tech.icone}
                            className={`tooltip-icon tooltip-icon-colored ${isWordmarkIcon ? "tooltip-icon-wordmark" : ""}`}
                        />
                        <span>{tech.nome}</span>
                    </div>
                    <p>{tech.descricao}</p>
                </div>
            </div>

            <div className={`tech-description-mobile ${isDescriptionVisible ? "visible" : ""}`}>
                <p>{tech.descricao}</p>
            </div>
        </div>
    );
}
