import Hero from "../components/secoes/Hero";
import Projetos from "../components/secoes/Projetos";
import Habilidades from "../components/secoes/Habilidades";
import Trajetoria from "../components/secoes/Trajetoria";
import Contato from "../components/secoes/Contato";

export default function HomePage() {
    return (
        <>
            <Hero />
            <Projetos />
            <Habilidades />
            <Trajetoria />
            <Contato />
        </>
    );
}
