import { getImagePath } from "../../utils/helpers";

interface TechIconProps {
    icone: string;
    className?: string;
}

/**
 * Ícone de tecnologia. SVGs do devicon são desenhados com mask-image e pintados
 * com a cor do texto (como a fonte de ícones fazia), sem baixar a fonte de 1,5MB.
 * Classes "bi ..." continuam usando o Bootstrap Icons.
 */
export default function TechIcon({ icone, className = "" }: TechIconProps) {
    if (!icone.endsWith(".svg")) {
        return <i className={`${icone} ${className}`} aria-hidden="true"></i>;
    }

    const url = `url(${getImagePath(icone)})`;
    return (
        <span
            className={`tech-svg ${className}`}
            style={{ WebkitMaskImage: url, maskImage: url }}
            aria-hidden="true"
        ></span>
    );
}
