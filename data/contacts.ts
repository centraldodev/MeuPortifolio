export interface Contato {
    valor: string;
    link: string;
    icone: string;
    cor: string;
}

export const contatos: Record<string, Contato> = {
    email: {
        valor: "natanaelsantos_silva@outlook.com",
        link: "mailto:natanaelsantos_silva@outlook.com",
        icone: "bi-envelope-fill",
        cor: "#EA4335"
    },
    linkedin: {
        valor: "linkedin.com/in/natanael2ilva",
        link: "https://www.linkedin.com/in/natanael2ilva",
        icone: "bi-linkedin",
        cor: "#0A66C2"
    },
    github: {
        valor: "github.com/n2ilva",
        link: "https://github.com/n2ilva",
        icone: "bi-github",
        cor: "#24292f"
    },
    whatsapp: {
        valor: "+55 62 99963-3100",
        link: "https://wa.me/5562999633100",
        icone: "bi-whatsapp",
        cor: "#25D366"
    },
    location: {
        valor: "Goiânia-GO, Brasil",
        link: "https://www.google.com/maps/place/Goiânia,+GO",
        icone: "bi-geo-alt-fill",
        cor: "#FF6B6B"
    }
};
