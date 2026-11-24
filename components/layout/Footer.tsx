import { profile } from "../../config/site.config";
import LogoMarca from "./LogoMarca";
import LinkSecao from "./LinkSecao";

export default function Footer() {
    return (
        <footer className="rodape">
            <div className="container rodape-conteudo">
                <LinkSecao secao="inicio" className="marca marca-pequena">
                    <LogoMarca tamanho={32} />
                    <span className="marca-texto">
                        <strong>{profile.name}</strong>
                    </span>
                </LinkSecao>

                <p className="rodape-texto">
                    © {new Date().getFullYear()} {profile.name} · Feito com Next.js e TypeScript
                </p>
            </div>
        </footer>
    );
}
