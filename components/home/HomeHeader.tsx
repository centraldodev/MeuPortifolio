"use client";
import { useEffect, useState } from "react";

import { roles, profile, experience } from "../../config/site.config";
import Link from "next/link";
import { getImagePath } from "../../utils/helpers";

export default function HomeHeader() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const isComplete = !isDeleting && displayText === currentRole;
        const delay = isComplete ? 2000 : isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            if (isComplete) {
                setIsDeleting(true);
            } else if (!isDeleting) {
                setDisplayText(currentRole.slice(0, displayText.length + 1));
            } else if (displayText.length > 0) {
                setDisplayText(currentRole.slice(0, displayText.length - 1));
            } else {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        }, delay);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="greeting">
                    <span className="wave">👋</span>
                    <span>Olá, eu sou</span>
                </div>

                <h1 className="hero-name">
                    Natanael Santos
                    <span className="name-highlight">da Silva Ramos</span>
                </h1>

                <div className="hero-role">
                    <span className="role-prefix">&lt;</span>
                    <span className="role-text">{displayText}</span>
                    <span className="cursor-blink">|</span>
                    <span className="role-suffix">/&gt;</span>
                </div>

                <p className="hero-description">
                    Desenvolvo aplicações <strong>web e mobile</strong> com React, Next.js, React Native e Node.js,
                    da interface ao deploy. Tenho apps publicados, um projeto em produção para cliente
                    e projetos com IA e Python.
                </p>
                <p className="hero-description">
                    Antes do código, foram <strong>{experience.infraYears} anos em infraestrutura de TI e redes</strong>:
                    uma base sólida em Linux, cloud, segurança e ambientes de produção que levo para cada projeto.
                </p>

                <div className="hero-cta">
                    <Link href="/projetos" className="btn-primary">
                        <i className="bi bi-folder-fill"></i>
                        Ver projetos
                    </Link>
                    <a
                        href={getImagePath(profile.resumeUrl)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                    >
                        <i className="bi bi-download"></i>
                        Baixar currículo
                    </a>
                </div>
            </div>

            <div className="hero-visual">
                <div className="code-block">
                    <div className="code-header">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                        <span className="filename">developer.ts</span>
                    </div>
                    <pre className="code-content">
{`const developer = {
  nome: "${profile.name}",
  cargo: "${profile.role}",
  cidade: "${profile.city}",
  status: "${profile.status}"
};`}
                    </pre>
                </div>
            </div>
        </section>
    );
}
