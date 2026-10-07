export type Plataforma = "Web" | "Mobile" | "Desktop";

export interface Projeto {
    id: string;
    nome: string;
    /** Frase curta exibida no card */
    resumo: string;
    /** Parágrafo de abertura da página do projeto */
    descricao: string;
    plataformas: Plataforma[];
    status: string;
    imagem: string;
    /** "icone" fica centralizado sobre a cor de fundo; "print" ocupa o card inteiro */
    imagemTipo: "icone" | "print";
    corFundo: string;
    link?: string;
    tecnologias: string[];
    funcionalidades: string[];
    destaquesTecnicos: string[];
    destaque?: string;
}

export const projetos: Projeto[] = [
    {
        id: "sara-ramos",
        nome: "Sara Ramos - Atividades Pedagógicas",
        resumo: "Plataforma de atividades pedagógicas para todas as idades, com loja e uma área PRO para criar e editar atividades online.",
        descricao: "Projeto feito para uma cliente real, a professora Sara Ramos. A plataforma vende atividades pedagógicas prontas para imprimir, para todas as idades, e oferece uma área PRO com editor online, onde é possível criar atividades do zero ou editar as que foram compradas.",
        plataformas: ["Web"],
        status: "Em produção",
        imagem: "/projetos/sara-ramos.webp",
        imagemTipo: "print",
        corFundo: "#fdf2f8",
        link: "https://sararamos.com.br/",
        tecnologias: ["TypeScript", "Next.js", "React", "Express", "MongoDB", "Stripe", "Firebase", "Vitest", "Playwright"],
        funcionalidades: [
            "Loja de atividades pedagógicas prontas para imprimir, para todas as idades",
            "Área PRO para criar atividades do zero e editar as atividades compradas",
            "Editor online com templates exclusivos da professora",
            "Exportação das atividades em PDF e imagem",
            "Carrinho e pagamento online",
            "Login com Google"
        ],
        destaquesTecnicos: [
            "Front-end em Next.js e API própria em Express, com MongoDB",
            "Pagamentos com Stripe e autenticação com JWT e Google",
            "Arquivos no Firebase Storage com regras de acesso",
            "Testes unitários e de integração (Vitest) e ponta a ponta (Playwright)",
            "Deploy automatizado com GitHub Actions e domínio próprio"
        ],
        destaque: "Cliente real"
    },
    {
        id: "cifra-estudio",
        nome: "Cifra Estúdio",
        resumo: "Transforma músicas em partitura, cifra e tablatura, separando os instrumentos com IA e mostrando tudo num instrumento virtual.",
        descricao: "App para músicos que transforma um arquivo de áudio em partitura, cifra e tablatura sincronizadas com a música. O sistema separa cada instrumento, transcreve as notas de piano, guitarra/violão e baixo individualmente e usa essa coleta para montar os acordes, com um instrumento virtual para facilitar a leitura.",
        plataformas: ["Web", "Mobile", "Desktop"],
        status: "Em desenvolvimento",
        imagem: "/projetos/cifra-estudio.webp",
        imagemTipo: "icone",
        corFundo: "#1f1a0e",
        link: "https://windows.tail00f338.ts.net/",
        tecnologias: ["Flutter", "Dart", "Python", "FastAPI", "PyTorch", "Supabase", "PostgreSQL", "FFmpeg"],
        funcionalidades: [
            "Separação dos instrumentos: voz, guitarra, piano, baixo e bateria",
            "Partitura, cifra e tablatura sincronizadas com o áudio",
            "Instrumento virtual para acompanhar a leitura",
            "Transposição em tempo real sem alterar o andamento",
            "Importação de partituras em PDF e MusicXML",
            "Download de cada instrumento separado"
        ],
        destaquesTecnicos: [
            "App Flutter único para Web, Android, iOS, macOS e Windows",
            "Backend Python com FastAPI e fila persistente de análises no Supabase/PostgreSQL",
            "Modelos de IA (BS-RoFormer, TransKun) rodando em GPU NVIDIA com PyTorch e CUDA",
            "Servidor de GPU busca trabalhos só por conexão de saída, sem portas expostas",
            "Arquivos grandes enviados direto ao Storage, com login Google e cota por usuário"
        ],
        destaque: "Destaque"
    },
    {
        id: "ive",
        nome: "Ive - Assistente Virtual",
        resumo: "Assistente virtual por voz que controla o computador: abre apps, executa tarefas, cuida de e-mails e mensagens, também pelo celular.",
        descricao: "Meu primeiro app voltado para desktop, com uma versão mobile. A Ive entende pedidos por voz ou texto e executa ações no computador (macOS e Windows): abrir aplicativos, automatizar tarefas, cuidar de e-mails e mensagens. Pelo celular, os pedidos são enviados para os computadores da mesma conta.",
        plataformas: ["Desktop", "Mobile"],
        status: "Em desenvolvimento",
        imagem: "/projetos/ive.webp",
        imagemTipo: "icone",
        corFundo: "#0f1b3d",
        tecnologias: ["Python", "TypeScript", "React Native", "Expo", "Azure", "WebSocket", "Tailscale"],
        funcionalidades: [
            "Comandos por voz ou texto",
            "Automação de aplicativos no macOS e no Windows",
            "App mobile que envia pedidos para os computadores da conta",
            "Integração com a Agenda Familiar e o Controle Financeiro",
            "Memória por conta e plugins",
            "Confirmação de ações sensíveis e opção de desfazer"
        ],
        destaquesTecnicos: [
            "Arquitetura que separa decisão, validação de segurança e execução no aparelho",
            "Servidor na Azure acessado por rede privada (Tailscale/WireGuard)",
            "Cada celular gera sua chave Ed25519 e assina as conexões com o servidor",
            "Plugins executados em processo isolado",
            "Testes automatizados do protocolo entre o app mobile e o desktop"
        ]
    },
    {
        id: "controle-financeiro",
        nome: "Controle Financeiro",
        resumo: "Controle de gastos, cartões e investimentos, com insights do período e dicas para sobrar mais dinheiro no fim do mês.",
        descricao: "App mobile e web para controle financeiro pessoal e em grupo. Reúne receitas, despesas, cartões e metas num só lugar e transforma esses dados em gráficos, previsões e dicas para fechar o mês no azul.",
        plataformas: ["Mobile", "Web"],
        status: "Publicado",
        imagem: "/projetos/controle-financeiro.webp",
        imagemTipo: "icone",
        corFundo: "#0b4d63",
        link: "https://centraldodev.github.io/ControleFinanceiro/",
        tecnologias: ["TypeScript", "React Native", "Expo", "Firebase", "Firestore"],
        funcionalidades: [
            "Receitas e despesas com categorias, recorrências e parcelamentos",
            "Cartões de crédito e débito com limite e controle de faturas",
            "Metas financeiras e orçamentos por categoria",
            "Grupos compartilhados com código de convite",
            "Gráficos de tendência, gastos por categoria e previsão do próximo mês",
            "Insights do período e dicas de economia"
        ],
        destaquesTecnicos: [
            "Mesma base de código para Android e Web com Expo",
            "Firebase Auth e Firestore com regras de segurança por usuário e grupo",
            "API REST de análise de dados",
            "Busca aproximada (fuzzy search) nas transações"
        ]
    },
    {
        id: "agenda-familiar",
        nome: "Agenda Familiar",
        resumo: "Agenda de tarefas em grupo: a família toda vê e organiza as tarefas, com modo privado para o que é só seu.",
        descricao: "App de agenda e tarefas cujo diferencial é o grupo: todos da família entram e acompanham as tarefas disponíveis em tempo real. Quem não quer que todos vejam algo usa o modo privado.",
        plataformas: ["Mobile", "Web"],
        status: "Publicado",
        imagem: "/projetos/agenda-familiar.webp",
        imagemTipo: "icone",
        corFundo: "#3b8fd9",
        link: "https://centraldodev.github.io/AgendaFamiliar/",
        tecnologias: ["TypeScript", "React Native", "Expo", "Firebase", "Cloud Functions", "Zustand"],
        funcionalidades: [
            "Grupos familiares com tarefas sincronizadas em tempo real",
            "Tarefas privadas, visíveis só para quem criou",
            "Permissões de administrador e dependente, com pedidos de aprovação",
            "Tarefas recorrentes, calendário com feriados e notificações",
            "Vários idiomas, tema escuro e login com Google",
            "Controle por voz pela assistente Ive"
        ],
        destaquesTecnicos: [
            "Expo Router e estado global com Zustand",
            "Firebase Auth, Firestore e Cloud Functions",
            "Regras de segurança do Firestore cobertas por testes",
            "Integração com a Ive assinada com HMAC-SHA256, tokens revogáveis e limite de requisições",
            "Internacionalização com i18next"
        ]
    },
    {
        id: "qmaster",
        nome: "QMaster",
        resumo: "App para treinar conhecimentos de tecnologia com quizzes, revisão espaçada, prática de código e simuladores.",
        descricao: "App mobile e web para estudar tecnologia praticando. Além de quizzes com explicação e exemplo, traz revisão espaçada, prática de código, simulador de resposta a incidentes e ranking, ajustando o nível conforme a taxa de acertos.",
        plataformas: ["Mobile", "Web"],
        status: "Publicado",
        imagem: "/projetos/qmaster.webp",
        imagemTipo: "icone",
        corFundo: "#1e1b4b",
        link: "https://centraldodev.github.io/QMaster/",
        tecnologias: ["TypeScript", "React Native", "Expo", "NativeWind", "Firebase"],
        funcionalidades: [
            "Quizzes por área com resposta explicada e exemplo prático",
            "Revisão espaçada e nivelamento pela taxa de acertos",
            "Prática de código",
            "Simulador de resposta a incidentes e DataCenter Builder",
            "Ranking e acompanhamento de progresso"
        ],
        destaquesTecnicos: [
            "Uma base de código para Web e Mobile com Expo Router e NativeWind (Tailwind)",
            "Firestore com regras que limitam cada usuário aos próprios dados",
            "Lint, checagem de tipos e testes rodando no CI antes de cada deploy",
            "Busca aproximada com Fuse.js"
        ]
    }
];
