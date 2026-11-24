import { profile } from "../../config/site.config";
import { getImagePath } from "../../utils/helpers";

/** Faixa azul no topo, com o recado principal para recrutadores */
export default function AvisoTopo() {
    return (
        <div className="aviso-topo">
            <span>{profile.status} como {profile.role.toLowerCase()}.</span>{" "}
            <a href={getImagePath(profile.resumeUrl)} target="_blank" rel="noopener noreferrer">
                Baixe meu currículo
            </a>
        </div>
    );
}
