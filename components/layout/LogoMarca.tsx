/** Marca do site: círculo azul com um anel e o símbolo de código */
export default function LogoMarca({ tamanho = 44 }: { tamanho?: number }) {
    return (
        <svg width={tamanho} height={tamanho} viewBox="0 0 48 48" aria-hidden="true">
            <circle cx="24" cy="24" r="22" fill="#4aa8e0" />
            <circle cx="24" cy="24" r="14.5" fill="none" stroke="#fff" strokeWidth="5" />
            <path
                d="M21 19.5 16.5 24l4.5 4.5M27 19.5l4.5 4.5-4.5 4.5"
                fill="none"
                stroke="#fff"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="37" cy="11" r="5" fill="#ff8a3d" stroke="#fff" strokeWidth="2.5" />
        </svg>
    );
}
