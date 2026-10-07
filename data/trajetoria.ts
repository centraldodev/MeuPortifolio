export interface EtapaCarreira {
    cargo: string;
    contexto: string;
    periodo: string;
    atividades: string[];
}

export interface Diferencial {
    titulo: string;
    icone: string;
    descricao: string;
}

export interface InfraCategoria {
    titulo: string;
    icone: string;
    itens: string[];
}

export interface Formacao {
    curso: string;
    instituicao: string;
    periodo: string;
    status: "em-andamento" | "concluido";
    icone: string;
}

export interface Curso {
    nome: string;
    duracao: string;
    plataforma: string;
    icone: string;
    classeIcone: string;
}

// Linha do tempo (mais recente primeiro)
export const carreira: EtapaCarreira[] = [
    {
        cargo: "Desenvolvedor Web & Mobile",
        contexto: "Projetos próprios e para clientes",
        periodo: "2025 – atual",
        atividades: [
            "Desenvolvi e publiquei apps mobile com React Native/Expo e Kotlin, com autenticação e banco de dados em tempo real (Firebase).",
            "Criei uma plataforma web para cliente com Next.js, Express e MongoDB: loja virtual, pagamentos com MercadoPago/Stripe e login com Google.",
            "Faço o ciclo completo: interface, API, banco de dados e deploy."
        ]
    },
    {
        cargo: "Analista de Infraestrutura e Redes",
        contexto: "Dexian Brasil, Solid Tecnologia, Ericsson e Atento Brasil",
        periodo: "2016 – 2025 · 8 anos",
        atividades: [
            "Configuração e testes de equipamentos Cisco L2/L3, Fortinet, MikroTik, Ubiquiti e telefonia IP.",
            "Administração de servidores Windows e Linux, Active Directory, GPO, Microsoft 365 e Azure.",
            "Virtualização com VMware e Hyper-V e monitoramento com Zabbix e SolarWinds.",
            "Atendimento orientado por ITIL, com BMC Remedy e ServiceNow."
        ]
    }
];

// O que a experiência em infraestrutura agrega ao desenvolvimento
export const diferenciais: Diferencial[] = [
    {
        titulo: "Deploy & Produção",
        icone: "bi-rocket-takeoff-fill",
        descricao: "Linux, Docker e cloud (AWS/Azure): sei colocar uma aplicação no ar e mantê-la funcionando."
    },
    {
        titulo: "Redes & HTTP",
        icone: "bi-diagram-3-fill",
        descricao: "DNS, HTTPS, proxies e firewalls: consigo depurar problemas que vão além do código."
    },
    {
        titulo: "Segurança",
        icone: "bi-shield-lock-fill",
        descricao: "VPN, firewall e controle de acesso: penso em segurança desde o início do projeto."
    },
    {
        titulo: "Processos & Usuário",
        icone: "bi-people-fill",
        descricao: "Anos de ITIL e atendimento: comunicação clara com equipes e foco em quem usa o sistema."
    }
];

export const infraCategorias: InfraCategoria[] = [
    {
        titulo: "Redes",
        icone: "bi-hdd-network-fill",
        itens: ["Cisco (L2/L3)", "SD-WAN", "VLAN", "VRF", "IPv4/IPv6", "DHCP", "DNS", "VPN IPsec", "MPLS", "BGP", "OSPF", "Voz IP"]
    },
    {
        titulo: "Servidores & Virtualização",
        icone: "bi-server",
        itens: ["Windows Server", "Linux", "Active Directory", "Azure AD", "GPO", "VMware", "Hyper-V"]
    },
    {
        titulo: "Segurança & Monitoramento",
        icone: "bi-shield-lock-fill",
        itens: ["pfSense", "Fortigate", "SolarWinds", "Zabbix"]
    },
    {
        titulo: "Cloud",
        icone: "bi-cloud-fill",
        itens: ["AWS", "Azure"]
    },
    {
        titulo: "Gestão & Automação",
        icone: "bi-gear-fill",
        itens: ["Shell Script", "Bash", "ITIL", "COBIT", "BMC Remedy", "ServiceNow"]
    }
];

export const formacoes: Formacao[] = [
    {
        curso: "Análise e Desenvolvimento de Sistemas",
        instituicao: "Estácio de Sá",
        periodo: "2025 - Presente",
        status: "em-andamento",
        icone: "bi-mortarboard-fill"
    },
    {
        curso: "Redes de Computadores",
        instituicao: "Uninove",
        periodo: "2023 - 2025",
        status: "concluido",
        icone: "bi-hdd-network-fill"
    }
];

export const cursos: Curso[] = [
    { nome: "Amazon AWS Certified Cloud", duracao: "80h - 2025", plataforma: "Udemy", icone: "bi-cloud-fill", classeIcone: "course-icon-aws" },
    { nome: "Microsoft AZ-900", duracao: "5h - 2024", plataforma: "Udemy", icone: "bi-microsoft", classeIcone: "course-icon-microsoft" },
    { nome: "Google Associate Cloud Engineer", duracao: "9h - 2024", plataforma: "Udemy", icone: "bi-google", classeIcone: "course-icon-google" },
    { nome: "Fortigate Firewall NSE4", duracao: "8h - 2024", plataforma: "Udemy", icone: "bi-shield-lock-fill", classeIcone: "course-icon-fortigate" },
    { nome: "CCNA 200-301", duracao: "80h - 2024", plataforma: "Udemy", icone: "bi-hdd-network-fill", classeIcone: "course-icon-cisco" }
];
