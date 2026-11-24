"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";

type LinkSecaoProps = Omit<ComponentProps<typeof Link>, "href"> & {
    /** id da seção na página inicial, sem o "#" */
    secao: string;
};

/**
 * Link para uma seção da página inicial.
 * Na própria página inicial, rola até a seção mesmo que o endereço já tenha
 * aquele "#" (o Next ignora o clique nesse caso). Em outras páginas, navega
 * normalmente para a página inicial.
 */
export default function LinkSecao({ secao, onClick, ...props }: LinkSecaoProps) {
    const pathname = usePathname();

    const aoClicar = (e: MouseEvent<HTMLAnchorElement>) => {
        onClick?.(e);
        if (e.defaultPrevented || pathname !== "/") return;
        // Ctrl/Cmd + clique continua abrindo em nova aba
        if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

        const alvo = document.getElementById(secao);
        if (!alvo) return;

        e.preventDefault();
        const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
        // O início volta ao topo de verdade, mostrando também a faixa de aviso
        if (secao === "inicio") window.scrollTo({ top: 0, behavior });
        else alvo.scrollIntoView({ behavior, block: "start" });
        window.history.replaceState(window.history.state, "", `#${secao}`);
    };

    return <Link href={`/#${secao}`} onClick={aoClicar} {...props} />;
}
