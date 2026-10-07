import { paginaMetadata } from "../../utils/metadata";
import SkillsPage from "../../components/development/skills-page";

export const metadata = paginaMetadata(
    "Habilidades",
    "Linguagens, frameworks, bancos de dados e serviços de cloud que Natanael Ramos usa nos projetos.",
    "/habilidades/"
);

export default function Page() {
    return <SkillsPage />;
}
