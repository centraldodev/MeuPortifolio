export interface Tecnologia {
    nome: string;
    icone: string;
    cor: string;
    descricao: string;
    categoria: "linguagem" | "framework" | "banco" | "cloud";
}

export const tecnologias: Tecnologia[] = [
    // Linguagens
    { nome: "TypeScript", icone: "/icons/tech/typescript-plain.svg", cor: "#3178C6", categoria: "linguagem",
        descricao: "Linguagem principal dos meus projetos web e mobile. Tipagem estática para código mais seguro e fácil de manter." },
    { nome: "JavaScript", icone: "/icons/tech/javascript-plain.svg", cor: "#F7DF1E", categoria: "linguagem",
        descricao: "Base do desenvolvimento web, usada no front-end e no back-end com Node.js." },
    { nome: "Python", icone: "/icons/tech/python-plain.svg", cor: "#4B8BBE", categoria: "linguagem",
        descricao: "Usado no backend do Cifra Estúdio (APIs e processamento de áudio) e no assistente Ive Desktop." },
    { nome: "Kotlin", icone: "/icons/tech/kotlin-plain.svg", cor: "#7F52FF", categoria: "linguagem",
        descricao: "Linguagem moderna para Android. Concisa, segura e interoperável com Java." },

    // Frameworks & Bibliotecas
    { nome: "React", icone: "/icons/tech/react-original.svg", cor: "#61DAFB", categoria: "framework",
        descricao: "Biblioteca para interfaces com componentes reutilizáveis e estado reativo." },
    { nome: "Next.js", icone: "/icons/tech/nextjs-plain.svg", cor: "#ffffff", categoria: "framework",
        descricao: "Framework React com rotas, renderização no servidor e geração estática. Usado neste portfólio e no site da Sara Ramos." },
    { nome: "React Native", icone: "/icons/tech/react-original.svg", cor: "#61DAFB", categoria: "framework",
        descricao: "Apps mobile nativos com React. Base da Agenda Familiar, do Controle Financeiro, do QMaster e da Ive Mobile." },
    { nome: "Expo", icone: "/icons/tech/expo-original.svg", cor: "#ffffff", categoria: "framework",
        descricao: "Plataforma para React Native com Expo Router, builds na nuvem (EAS) e uma base de código para Android, iOS e Web." },
    { nome: "Node.js", icone: "/icons/tech/nodejs-plain.svg", cor: "#339933", categoria: "framework",
        descricao: "JavaScript no servidor para criar APIs e back-ends." },
    { nome: "Express", icone: "/icons/tech/express-original.svg", cor: "#ffffff", categoria: "framework",
        descricao: "Framework minimalista para APIs REST em Node.js. Usado na API da plataforma Sara Ramos." },
    { nome: "FastAPI", icone: "/icons/tech/fastapi-plain.svg", cor: "#05998B", categoria: "framework",
        descricao: "Framework Python para APIs rápidas e tipadas. Usado na API e na fila de análises do Cifra Estúdio." },
    { nome: "Tailwind CSS", icone: "/icons/tech/tailwindcss-plain.svg", cor: "#06B6D4", categoria: "framework",
        descricao: "CSS utilitário para interfaces rápidas e consistentes. Usado com NativeWind no QMaster." },
    { nome: "Bootstrap", icone: "/icons/tech/bootstrap-plain.svg", cor: "#7952B3", categoria: "framework",
        descricao: "Framework CSS com componentes prontos e grid responsivo." },
    { nome: "Zustand", icone: "/icons/tech/zustand-plain.svg", cor: "#C7A27C", categoria: "framework",
        descricao: "Gerenciamento de estado simples e leve para React. Usado na Agenda Familiar." },

    // Bancos de Dados & BaaS
    { nome: "Firebase", icone: "/icons/tech/firebase-plain.svg", cor: "#FFCA28", categoria: "banco",
        descricao: "Autenticação, Firestore, Cloud Functions e Storage, com regras de segurança por usuário." },
    { nome: "Supabase", icone: "/icons/tech/supabase-plain.svg", cor: "#3ECF8E", categoria: "banco",
        descricao: "PostgreSQL com autenticação e storage. Usado no Cifra Estúdio para login, projetos e fila de trabalhos." },
    { nome: "MongoDB", icone: "/icons/tech/mongodb-plain.svg", cor: "#47A248", categoria: "banco",
        descricao: "Banco NoSQL orientado a documentos. Usado na plataforma Sara Ramos." },
    { nome: "PostgreSQL", icone: "/icons/tech/postgresql-plain.svg", cor: "#4F8CC9", categoria: "banco",
        descricao: "Banco relacional robusto, com suporte a JSON e extensões." },

    // Cloud, DevOps & Ferramentas
    { nome: "AWS", icone: "/icons/tech/amazonwebservices-plain-wordmark.svg", cor: "#FF9900", categoria: "cloud",
        descricao: "EC2, S3, Lambda, DynamoDB e Aurora: servidores, armazenamento, funções serverless e bancos gerenciados." },
    { nome: "Azure", icone: "/icons/tech/azure-plain.svg", cor: "#0089D6", categoria: "cloud",
        descricao: "Hospeda o servidor da assistente Ive. Experiência anterior com Azure AD e Microsoft 365 na infraestrutura." },
    { nome: "Docker", icone: "/icons/tech/docker-plain.svg", cor: "#2496ED", categoria: "cloud",
        descricao: "Containers para empacotar aplicações e manter ambientes consistentes." },
    { nome: "Git", icone: "/icons/tech/git-plain.svg", cor: "#F05032", categoria: "cloud",
        descricao: "Controle de versão em todos os projetos." },
    { nome: "GitHub", icone: "/icons/tech/github-original.svg", cor: "#ffffff", categoria: "cloud",
        descricao: "Repositórios, revisão de código e GitHub Actions para CI e deploy automático." },
    { nome: "Stripe", icone: "bi bi-stripe", cor: "#635BFF", categoria: "cloud",
        descricao: "Pagamentos online e assinaturas. Integrado na plataforma Sara Ramos." },
    { nome: "Vitest", icone: "/icons/tech/vitest-plain.svg", cor: "#6E9F18", categoria: "cloud",
        descricao: "Testes unitários e de integração." },
    { nome: "Playwright", icone: "/icons/tech/playwright-plain.svg", cor: "#2EAD33", categoria: "cloud",
        descricao: "Testes ponta a ponta no navegador." }
];

// Categorias para exibição
export const categorias = {
    linguagem: {
        titulo: "Linguagens",
        icone: "bi-code-slash"
    },
    framework: {
        titulo: "Frameworks & Bibliotecas",
        icone: "bi-boxes"
    },
    banco: {
        titulo: "Bancos de Dados & BaaS",
        icone: "bi-database"
    },
    cloud: {
        titulo: "Cloud, DevOps & Ferramentas",
        icone: "bi-cloud-fill"
    }
} as const;
