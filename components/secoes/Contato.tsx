import { Fragment } from "react";
import { profile } from "../../config/site.config";
import { contatos } from "../../data/contacts";
import { getImagePath } from "../../utils/helpers";

// Permite quebrar a linha depois do "@" e das barras, nunca no meio de uma palavra
const quebravel = (texto: string) =>
    texto.split(/(?<=[@/])/).map((parte, i) => (
        <Fragment key={i}>
            {i > 0 && <wbr />}
            {parte}
        </Fragment>
    ));

const canais = [
    { chave: "email", nome: "E-mail" },
    { chave: "linkedin", nome: "LinkedIn" },
    { chave: "whatsapp", nome: "WhatsApp" },
    { chave: "github", nome: "GitHub" },
] as const;

export default function Contato() {
    return (
        <section id="contato" className="secao">
            <div className="container">
                <div className="contato-faixa">
                    <div className="contato-texto">
                        <p className="secao-rotulo">Contato</p>
                        <h2>Vamos construir algo juntos?</h2>
                        <p>
                            Estou {profile.status.toLowerCase()} como {profile.role.toLowerCase()}. Respondo
                            rápido por e-mail, LinkedIn ou WhatsApp. Moro em {contatos.location.valor}.
                        </p>
                        <a
                            href={getImagePath(profile.resumeUrl)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="botao botao-branco"
                        >
                            <i className="bi bi-download" aria-hidden="true"></i> Baixar currículo
                        </a>
                    </div>

                    <ul className="contato-canais">
                        {canais.map(({ chave, nome }) => (
                            <li key={chave}>
                                <a
                                    href={contatos[chave].link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="canal-icone">
                                        <i className={`bi ${contatos[chave].icone}`} aria-hidden="true"></i>
                                    </span>
                                    <span className="canal-texto">
                                        <strong>{nome}</strong>
                                        <small>{quebravel(contatos[chave].valor)}</small>
                                    </span>
                                    <i className="bi bi-arrow-up-right canal-seta" aria-hidden="true"></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
