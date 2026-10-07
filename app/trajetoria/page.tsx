import { paginaMetadata } from "../../utils/metadata";
import TrajetoriaPage from "../../components/infrastructure/trajetoria";

export const metadata = paginaMetadata(
    "Trajetória",
    "De 8 anos em infraestrutura de TI e redes para o desenvolvimento web e mobile.",
    "/trajetoria/"
);

export default function Page() {
    return <TrajetoriaPage />;
}
