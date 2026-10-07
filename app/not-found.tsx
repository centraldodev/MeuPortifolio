import Link from "next/link";

export default function NotFound() {
    return (
        <div className="page-container not-found">
            <p className="not-found-codigo">404</p>
            <h1>Página não encontrada</h1>
            <p className="intro-text">O endereço que você tentou abrir não existe ou mudou de lugar.</p>
            <Link href="/" className="btn btn-primary">
                <i className="bi bi-house-fill me-2"></i>
                Voltar para o início
            </Link>
        </div>
    );
}
