import { paginaMetadata } from "../../utils/metadata";
import ContactPage from "../../components/contact/contact";

export const metadata = paginaMetadata(
    "Contato",
    "E-mail, LinkedIn, GitHub e WhatsApp de Natanael Ramos.",
    "/contato/"
);

export default function Page() {
    return <ContactPage />;
}
