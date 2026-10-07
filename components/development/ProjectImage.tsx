import Image from "next/image";
import { Projeto } from "../../data/projects";
import { getImagePath } from "../../utils/helpers";

interface ProjectImageProps {
    projeto: Projeto;
    sizes: string;
    priority?: boolean;
}

export default function ProjectImage({ projeto, sizes, priority }: ProjectImageProps) {
    return (
        <div
            className={`projeto-imagem-wrapper ${projeto.imagemTipo}`}
            style={{ "--projeto-bg": projeto.corFundo } as React.CSSProperties}
        >
            <Image
                src={getImagePath(projeto.imagem)}
                alt={`Imagem do projeto ${projeto.nome}`}
                className="projeto-imagem"
                fill
                sizes={sizes}
                priority={priority}
            />
        </div>
    );
}
