"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import "./site-shell.css";

import { menuItems, profile } from "../../config/site.config";
import ProfileCard from "../ProfileCard";
import NavMenuItem from "../NavMenuItem";
import { getImagePath } from "../../utils/helpers";

export default function SiteShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const scrollRef = useRef<HTMLDivElement>(null);

    // No mobile a rolagem acontece dentro de .content-scroll, não na janela
    useEffect(() => {
        scrollRef.current?.scrollTo(0, 0);
    }, [pathname]);

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <div className="main-wrapper">
            <a href="#conteudo" className="skip-link">
                Pular para o conteúdo
            </a>

            {/* Sidebar Desktop */}
            <aside className="sidebar sidebar-desktop">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-4 text-white sidebar-content">
                    <ProfileCard />

                    <nav className="w-100" aria-label="Menu principal">
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 w-100">
                            {menuItems.map((item) => (
                                <NavMenuItem key={item.href} item={item} isActive={isActive(item.href)} />
                            ))}
                        </ul>
                    </nav>

                    <div className="mt-auto w-100 pt-3 pb-4 download-desktop">
                        <a
                            href={getImagePath(profile.resumeUrl)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2 download-btn"
                        >
                            <i className="bi bi-download"></i>
                            <span className="d-none d-sm-inline">Baixar Currículo</span>
                        </a>
                    </div>
                </div>
            </aside>

            {/* Área de Conteúdo Principal */}
            <div className="content-area">
                <div className="content-scroll" ref={scrollRef}>
                    <main id="conteudo" tabIndex={-1} className="rounded-4 p-4 content-card">{children}</main>
                </div>
            </div>

            {/* Menu Mobile (Rodapé) */}
            <nav className="mobile-nav" aria-label="Menu principal">
                <ul className="nav">
                    {menuItems.map((item) => (
                        <NavMenuItem key={item.href} item={item} isActive={isActive(item.href)} />
                    ))}
                </ul>
            </nav>
        </div>
    );
}
