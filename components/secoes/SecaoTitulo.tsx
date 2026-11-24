interface SecaoTituloProps {
    rotulo: string;
    titulo: string;
    children?: React.ReactNode;
    centralizado?: boolean;
}

/** Cabeçalho padrão das seções: rótulo pequeno em azul, título e texto de apoio */
export default function SecaoTitulo({ rotulo, titulo, children, centralizado }: SecaoTituloProps) {
    return (
        <header className={`secao-titulo ${centralizado ? "centralizado" : ""}`}>
            <p className="secao-rotulo">{rotulo}</p>
            <h2>{titulo}</h2>
            {children && <p className="secao-descricao">{children}</p>}
        </header>
    );
}
