import { paginaMetadata } from "../../utils/metadata";
import ProjectsPage from "../../components/development/projects-page";

export const metadata = paginaMetadata(
    "Projetos",
    "Apps web, mobile e desktop desenvolvidos por Natanael Ramos com React, React Native, Next.js e Python.",
    "/projetos/"
);

export default function Page() {
    return <ProjectsPage />;
}
