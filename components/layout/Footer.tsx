import Link from "next/link";
import { profile } from "../../config/site.config";
import { contatos } from "../../data/contacts";
import LogoMarca from "./LogoMarca";

const redes = ["github", "linkedin", "email"] as const;
const nomes = { github: "GitHub", linkedin: "LinkedIn", email: "E-mail" };

export default function Footer() {
    return (
        <footer className="rodape">
            <div className="container rodape-conteudo">
                <Link href="/#inicio" className="marca marca-pequena">
                    <LogoMarca tamanho={32} />
                    <span className="marca-texto">
                        <strong>{profile.name}</strong>
                    </span>
                </Link>

                <p className="rodape-texto">
                    © {new Date().getFullYear()} {profile.name} · Feito com Next.js e TypeScript
                </p>

                <ul className="rodape-redes">
                    {redes.map((rede) => (
                        <li key={rede}>
                            <a
                                href={contatos[rede].link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={nomes[rede]}
                            >
                                <i className={`bi ${contatos[rede].icone}`} aria-hidden="true"></i>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}
