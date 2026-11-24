import Link from "next/link";

export default function NotFound() {
    return (
        <section className="secao nao-encontrada">
            <div className="container">
                <p className="nao-encontrada-codigo">404</p>
                <h1>Página não encontrada</h1>
                <p>O endereço que você tentou abrir não existe ou mudou de lugar. Agora o portfólio é uma página só.</p>
                <Link href="/" className="botao botao-azul">
                    Voltar para o início
                </Link>
            </div>
        </section>
    );
}
