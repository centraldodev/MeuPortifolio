"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { menuItems, profile } from "../../config/site.config";
import { getImagePath } from "../../utils/helpers";
import LogoMarca from "./LogoMarca";
import LinkSecao from "./LinkSecao";

export default function Header() {
    const pathname = usePathname();
    const naHome = pathname === "/";
    const [menuAberto, setMenuAberto] = useState(false);
    const [rolou, setRolou] = useState(false);
    const [secaoAtiva, setSecaoAtiva] = useState("");

    // Sombra no cabeçalho e, na página inicial, destaque da seção que está na tela
    useEffect(() => {
        const secoes = naHome ? Array.from(document.querySelectorAll<HTMLElement>("main section[id]")) : [];

        const aoRolar = () => {
            setRolou(window.scrollY > 40);
            if (!secoes.length) return;

            const noFim = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
            if (noFim) {
                setSecaoAtiva(secoes[secoes.length - 1].id);
                return;
            }
            // Última seção cujo topo já passou de 40% da altura da tela
            const linha = window.innerHeight * 0.4;
            const atual = secoes.filter((secao) => secao.getBoundingClientRect().top <= linha).pop();
            setSecaoAtiva(atual?.id ?? "");
        };

        aoRolar();
        window.addEventListener("scroll", aoRolar, { passive: true });
        window.addEventListener("resize", aoRolar);
        return () => {
            window.removeEventListener("scroll", aoRolar);
            window.removeEventListener("resize", aoRolar);
        };
    }, [naHome]);

    // Esc fecha o menu no celular
    useEffect(() => {
        if (!menuAberto) return;
        const aoTeclar = (e: KeyboardEvent) => e.key === "Escape" && setMenuAberto(false);
        window.addEventListener("keydown", aoTeclar);
        return () => window.removeEventListener("keydown", aoTeclar);
    }, [menuAberto]);

    const fecharMenu = () => setMenuAberto(false);

    return (
        <header className={`topo ${rolou ? "rolou" : ""} ${menuAberto ? "menu-aberto" : ""}`}>
            <div className="container topo-conteudo">
                <LinkSecao secao="inicio" className="marca" onClick={fecharMenu}>
                    <LogoMarca />
                    <span className="marca-texto">
                        <strong>{profile.name}</strong>
                        <small>dev web &amp; mobile</small>
                    </span>
                </LinkSecao>

                <button
                    type="button"
                    className="menu-botao"
                    aria-expanded={menuAberto}
                    aria-controls="menu-principal"
                    aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                    onClick={() => setMenuAberto((aberto) => !aberto)}
                >
                    <i className={`bi ${menuAberto ? "bi-x-lg" : "bi-list"}`} aria-hidden="true"></i>
                </button>

                <nav id="menu-principal" className="menu" aria-label="Menu principal">
                    <ul>
                        {menuItems.map((item) => {
                            const ativo = naHome && secaoAtiva === item.id;
                            return (
                                <li key={item.id}>
                                    <LinkSecao
                                        secao={item.id}
                                        className={`menu-link ${ativo ? "ativo" : ""}`}
                                        aria-current={ativo ? "location" : undefined}
                                        onClick={fecharMenu}
                                    >
                                        {item.label}
                                    </LinkSecao>
                                </li>
                            );
                        })}
                    </ul>
                    <a
                        href={getImagePath(profile.resumeUrl)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="botao botao-branco"
                    >
                        Currículo
                    </a>
                </nav>
            </div>
        </header>
    );
}
