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

// Roles para animação na Home
export const roles = [
    "Desenvolvedor Web",
    "Desenvolvedor Mobile",
    "Desenvolvedor Full Stack",
];

// Configurações do Menu de Navegação
export interface MenuItem {
    label: string;
    icon: string;
    href: string;
}

export const menuItems: MenuItem[] = [
    { label: "Início", icon: "bi-house-fill", href: "/" },
    { label: "Projetos", icon: "bi-folder-fill", href: "/projetos" },
    { label: "Habilidades", icon: "bi-code-slash", href: "/habilidades" },
    { label: "Trajetória", icon: "bi-signpost-split-fill", href: "/trajetoria" },
    { label: "Contato", icon: "bi-envelope-fill", href: "/contato" }
];

// Experiências detalhadas (Home)
export const experiencias: {
    area: string;
    tempo: string;
    icone: string;
    cor: string;
    descricao: string;
    tags: string[];
    href: string;
}[] = [
    {
        area: "Desenvolvimento Web & Mobile",
        tempo: `${experience.devYears}+ ano`,
        icone: "bi-code-slash",
        cor: "#22c55e",
        descricao: "Apps web, mobile e desktop, do front-end ao deploy, incluindo um projeto em produção para cliente, com pagamentos integrados.",
        tags: ["TypeScript", "React", "Next.js", "React Native", "Expo", "Node.js", "Express", "Python", "Kotlin", "FastAPI", "Firebase", "Supabase", "MongoDB", "PostgreSQL", "Docker", "Git"],
        href: "/projetos"
    },
    {
        area: "Infraestrutura de TI & Redes",
        tempo: `${experience.infraYears} anos`,
        icone: "bi-hdd-network-fill",
        cor: "#6366f1",
        descricao: "Base que levo para o desenvolvimento: Linux, redes, cloud, segurança e ambientes de produção.",
        tags: ["Linux", "Windows Server", "Redes (Cisco L2/L3)", "Azure", "AWS", "VMware", "Fortinet", "Zabbix"],
        href: "/trajetoria"
    }
];
