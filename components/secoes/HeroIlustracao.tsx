/**
 * Ilustração do topo: uma plataforma flutuante com propulsores, onde dois braços
 * robóticos montam um notebook e um celular. Tons de lavanda e branco com
 * detalhes em laranja, no estilo das ilustrações isométricas suaves.
 */
export default function HeroIlustracao() {
    return (
        <svg
            className="hero-ilustracao"
            viewBox="0 0 560 500"
            role="img"
            aria-label="Ilustração: braços robóticos montando um notebook e um celular sobre uma plataforma flutuante"
        >
            <defs>
                <radialGradient id="ilu-brilho" cx="50%" cy="45%" r="50%">
                    <stop offset="0" stopColor="#ffffff" />
                    <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="ilu-topo" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#ffffff" />
                    <stop offset="1" stopColor="#dfe3f8" />
                </linearGradient>
                <linearGradient id="ilu-lateral" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#9aa3dc" />
                    <stop offset="0.5" stopColor="#c3c9ef" />
                    <stop offset="1" stopColor="#8f98d4" />
                </linearGradient>
                <linearGradient id="ilu-chama" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#ffd23f" />
                    <stop offset="0.35" stopColor="#ff8a3d" />
                    <stop offset="1" stopColor="#ff4d3d" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="ilu-segmento" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#f4f5fd" />
                    <stop offset="1" stopColor="#b5bce9" />
                </linearGradient>
                <linearGradient id="ilu-tela" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#3a4680" />
                    <stop offset="1" stopColor="#273163" />
                </linearGradient>
                <radialGradient id="ilu-laser" cx="50%" cy="50%" r="50%">
                    <stop offset="0" stopColor="#ffd23f" />
                    <stop offset="0.5" stopColor="#ff8a3d" stopOpacity="0.6" />
                    <stop offset="1" stopColor="#ff8a3d" stopOpacity="0" />
                </radialGradient>
                <filter id="ilu-sombra" x="-20%" y="-20%" width="140%" height="160%">
                    <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#5b67b5" floodOpacity="0.18" />
                </filter>
            </defs>

            {/* Brilho de fundo e elementos flutuantes */}
            <circle cx="290" cy="250" r="240" fill="url(#ilu-brilho)" />
            <g className="ilu-flutua-lento" fill="#d6dbf5">
                <rect x="40" y="110" width="26" height="26" rx="6" transform="rotate(18 53 123)" />
                <circle cx="505" cy="90" r="9" />
                <circle cx="70" cy="380" r="6" />
                <rect x="490" y="300" width="18" height="18" rx="4" transform="rotate(-20 499 309)" />
            </g>

            {/* Propulsores e chamas */}
            <g className="ilu-chamas">
                <path d="M182 400 Q190 470 197 492 Q204 470 212 400 Z" fill="url(#ilu-chama)" />
                <path d="M348 400 Q356 470 363 492 Q370 470 378 400 Z" fill="url(#ilu-chama)" />
            </g>
            <g fill="#a7afe0">
                <rect x="178" y="360" width="38" height="44" rx="6" />
                <rect x="344" y="360" width="38" height="44" rx="6" />
            </g>
            <g fill="#7c86c6">
                <rect x="178" y="376" width="38" height="6" />
                <rect x="344" y="376" width="38" height="6" />
            </g>

            {/* Plataforma */}
            <g className="ilu-plataforma" filter="url(#ilu-sombra)">
                <ellipse cx="280" cy="376" rx="128" ry="22" fill="#2d3866" />
                <path d="M80 330 v22 a200 42 0 0 0 400 0 v-22 Z" fill="url(#ilu-lateral)" />
                <ellipse cx="280" cy="330" rx="200" ry="42" fill="url(#ilu-topo)" />
                <ellipse cx="280" cy="330" rx="150" ry="28" fill="none" stroke="#d3d8f3" strokeWidth="3" />
                <circle cx="280" cy="362" r="7" fill="none" stroke="#7c86c6" strokeWidth="3" />
            </g>

            {/* Notebook */}
            <g className="ilu-notebook">
                <rect x="203" y="186" width="154" height="104" rx="9" fill="#2d3866" />
                <rect x="211" y="194" width="138" height="88" rx="4" fill="url(#ilu-tela)" />
                <g strokeLinecap="round" strokeWidth="5">
                    <line x1="224" y1="210" x2="250" y2="210" stroke="#ff8a3d" />
                    <line x1="258" y1="210" x2="300" y2="210" stroke="#7fc4ef" />
                    <line x1="236" y1="226" x2="290" y2="226" stroke="#b5bce9" />
                    <line x1="236" y1="242" x2="268" y2="242" stroke="#7fc4ef" />
                    <line x1="276" y1="242" x2="320" y2="242" stroke="#ffd23f" />
                    <line x1="236" y1="258" x2="300" y2="258" stroke="#b5bce9" />
                    <line x1="224" y1="272" x2="246" y2="272" stroke="#ff8a3d" />
                </g>
                <path d="M188 290 H372 L388 306 Q388 310 383 310 H177 Q172 310 172 306 Z" fill="#c9cef1" />
                <rect x="258" y="292" width="44" height="5" rx="2.5" fill="#a7afe0" />
            </g>

            {/* Celular */}
            <g className="ilu-celular">
                <rect x="378" y="226" width="50" height="90" rx="10" fill="#ffffff" stroke="#b5bce9" strokeWidth="3" />
                <rect x="385" y="236" width="36" height="66" rx="4" fill="#e9f3fb" />
                <rect x="390" y="242" width="26" height="14" rx="3" fill="#4aa8e0" />
                <rect x="390" y="261" width="26" height="6" rx="3" fill="#b5bce9" />
                <rect x="390" y="271" width="18" height="6" rx="3" fill="#b5bce9" />
                <rect x="390" y="284" width="26" height="12" rx="3" fill="#ff8a3d" />
                <rect x="397" y="307" width="12" height="3" rx="1.5" fill="#b5bce9" />
            </g>

            {/* Braço esquerdo, segurando uma peça com o símbolo de código */}
            <g className="ilu-braco-esq">
                <ellipse cx="118" cy="322" rx="30" ry="10" fill="#9aa3dc" />
                <rect x="94" y="290" width="48" height="32" rx="10" fill="url(#ilu-segmento)" />
                <line x1="118" y1="292" x2="96" y2="198" stroke="#b5bce9" strokeWidth="28" strokeLinecap="round" />
                <line x1="112" y1="290" x2="91" y2="200" stroke="#eef0fb" strokeWidth="8" strokeLinecap="round" />
                <circle cx="96" cy="198" r="22" fill="#f4f5fd" stroke="#b5bce9" strokeWidth="3" />
                <circle cx="96" cy="198" r="8" fill="#ff8a3d" />
                <line x1="96" y1="198" x2="170" y2="128" stroke="#b5bce9" strokeWidth="22" strokeLinecap="round" />
                <line x1="94" y1="190" x2="164" y2="124" stroke="#eef0fb" strokeWidth="6" strokeLinecap="round" />
                <circle cx="170" cy="128" r="16" fill="#f4f5fd" stroke="#b5bce9" strokeWidth="3" />
                <path d="M182 118 l20 -6 M182 138 l20 6" stroke="#2d3866" strokeWidth="6" strokeLinecap="round" />
                <g className="ilu-flutua">
                    <rect x="200" y="98" width="52" height="52" rx="12" fill="#4aa8e0" />
                    <path
                        d="M219 114 211 124l8 10M233 114l8 10-8 10"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
            </g>

            {/* Braço direito, com a ponta laranja "soldando" o celular */}
            <g className="ilu-braco-dir">
                <ellipse cx="458" cy="322" rx="30" ry="10" fill="#9aa3dc" />
                <rect x="434" y="290" width="48" height="32" rx="10" fill="url(#ilu-segmento)" />
                <line x1="458" y1="292" x2="490" y2="190" stroke="#b5bce9" strokeWidth="28" strokeLinecap="round" />
                <line x1="452" y1="290" x2="484" y2="190" stroke="#eef0fb" strokeWidth="8" strokeLinecap="round" />
                <circle cx="490" cy="190" r="22" fill="#f4f5fd" stroke="#b5bce9" strokeWidth="3" />
                <circle cx="490" cy="190" r="8" fill="#ff8a3d" />
                <line x1="490" y1="190" x2="430" y2="150" stroke="#b5bce9" strokeWidth="22" strokeLinecap="round" />
                <line x1="488" y1="182" x2="432" y2="144" stroke="#eef0fb" strokeWidth="6" strokeLinecap="round" />
                <path d="M436 140 L412 176 L398 166 L420 134 Z" fill="#f4f5fd" stroke="#b5bce9" strokeWidth="3" strokeLinejoin="round" />
                <path d="M412 176 L398 166 L392 180 Z" fill="#ff8a3d" />
                <circle className="ilu-laser" cx="394" cy="186" r="18" fill="url(#ilu-laser)" />
            </g>
        </svg>
    );
}
