import { projetos } from "../data/projects";

// Configurações do Perfil
export const siteUrl = "https://centraldodev.github.io/MeuPortifolio";

export const profile = {
    name: "Natanael Ramos",
    fullName: "Natanael Santos da Silva Ramos",
    role: "Desenvolvedor Web & Mobile",
    stack: "React · React Native · Node.js",
    city: "Goiânia-GO",
    status: "Aberto a oportunidades",
    photo: "/photo.webp",
    photoAlt: "Foto de perfil - Natanael Ramos",
    resumeUrl: "/Natanael-Ramos-Curriculo.pdf"
};

// Configurações de Experiência
export const experience = {
    infraYears: 8,
    devYears: 1,
    get totalYears() {
        return this.infraYears + this.devYears;
    },
    projectCount: projetos.length
};

// Seções da página única (o id é a âncora de cada seção)
export interface MenuItem {
    label: string;
    id: string;
}

export const menuItems: MenuItem[] = [
    { label: "Projetos", id: "projetos" },
    { label: "Habilidades", id: "habilidades" },
    { label: "Trajetória", id: "trajetoria" },
    { label: "Contato", id: "contato" }
];
