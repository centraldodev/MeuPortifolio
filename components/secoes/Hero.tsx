import Image from "next/image";

import { experience, profile } from "../../config/site.config";
import { projetos } from "../../data/projects";
import { getImagePath } from "../../utils/helpers";
import HeroIlustracao from "./HeroIlustracao";
import LinkSecao from "../layout/LinkSecao";

const emProducao = projetos.filter((p) => p.status === "Em produção").length;

const numeros = [
    { valor: projetos.length, rotulo: "projetos desenvolvidos" },
    { valor: emProducao, rotulo: "plataformas em produção" },
    { valor: `${experience.infraYears} anos`, rotulo: "em infraestrutura de TI" },
];

export default function Hero() {
    return (
        <section id="inicio" className="hero">
            <div className="container hero-conteudo">
                <div className="hero-texto">
                    <p className="hero-apresentacao">
                        <Image
                            src={getImagePath(profile.photo)}
                            alt=""
                            width={44}
                            height={44}
                            className="hero-foto"
                            priority
                        />
                        <span>
                            Olá, eu sou <strong>{profile.fullName}</strong>
                        </span>
                    </p>

                    <h1>
                        Desenvolvo apps web e mobile, da interface ao deploy
                    </h1>

                    <p className="hero-descricao">
                        {profile.role} com {profile.stack}. Antes do código, foram {experience.infraYears} anos
                        em infraestrutura e redes: sei como uma aplicação vive em produção.
                    </p>

                    <div className="hero-acoes">
                        <LinkSecao secao="projetos" className="botao botao-azul">
                            Ver projetos
                        </LinkSecao>
                        <LinkSecao secao="contato" className="botao botao-texto">
                            Fale comigo <i className="bi bi-arrow-right" aria-hidden="true"></i>
                        </LinkSecao>
                    </div>

                    <ul className="hero-numeros">
                        {numeros.map((n) => (
                            <li key={n.rotulo}>
                                <strong>{n.valor}</strong>
                                <span>{n.rotulo}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hero-visual">
                    <HeroIlustracao />
                </div>
            </div>
        </section>
    );
}
