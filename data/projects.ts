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
        id: "88-teclas",
        nome: "88 Teclas - Plataforma de Piano",
        resumo: "Plataforma de ensino de piano com aulas ao vivo em vídeo, cursos gravados, prática com teclado MIDI no navegador e marketplace que paga os professores.",
        descricao: "Plataforma completa de ensino de piano, em produção. O aluno encontra um professor, agenda e paga a aula, tem a aula por vídeo com som de qualidade para o instrumento, estuda com cursos gravados e pratica todos os dias tocando no próprio teclado MIDI, com o site corrigindo nota a nota. Para os professores é um marketplace: cada um define agenda, preço e duração das aulas, publica cursos e recebe a sua parte automaticamente depois que a aula acontece.",
        plataformas: ["Web"],
        status: "Em produção",
        imagem: "/projetos/88-teclas.png",
        imagemTipo: "icone",
        corFundo: "#111827",
        link: "https://88teclas.com.br/",
        tecnologias: ["TypeScript", "React", "Vite", "Node.js", "Express", "Zod", "Firebase", "Stripe", "WebRTC", "Web MIDI", "Web Audio", "Cloudflare"],
        funcionalidades: [
            "Aulas ao vivo por vídeo, com agenda por professor e reserva sem conflito de horário",
            "Pianito: prática com teclado MIDI no navegador (escalas, acordes, leitura de partitura e ditados), com pontuação e estatísticas de erros",
            "Partitura, cifra e piano roll sincronizados, com transposição e importação de arquivos MIDI",
            "Cursos gravados com player protegido por marca-d'água e progresso por aula",
            "Pagamento por cartão, Pix e boleto, cupons e reembolso automático",
            "Áreas do professor e do administrador: agenda, alunos, materiais, aprovações e repasses"
        ],
        destaquesTecnicos: [
            "Sala de vídeo própria em WebRTC, com áudio estéreo a 128 kbps ajustado para piano e TURN da Cloudflare para redes restritas",
            "Web MIDI e Web Audio para ler o teclado e tocar piano no navegador; o servidor recalcula a pontuação para evitar trapaça",
            "Marketplace com Stripe Connect: repasse ao professor só depois da aula, webhook idempotente e regras de dinheiro cobertas por testes",
            "Reserva de horários com transações no Firestore, sem dois alunos no mesmo horário",
            "Banco fechado para o navegador, Firebase App Check e teste de invasão com 33 ataques barrados",
            "Cerca de 43 mil linhas em TypeScript, 228 testes e CI com typecheck, testes, build e auditoria"
        ],
        destaque: "Destaque"
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
        tecnologias: ["TypeScript", "React Native", "Expo", "Firebase", "Firestore", "Cloud Functions", "Express"],
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
            "Vários idiomas, tema escuro e login com Google"
        ],
        destaquesTecnicos: [
            "Expo Router e estado global com Zustand",
            "Firebase Auth, Firestore e Cloud Functions",
            "Regras de segurança do Firestore cobertas por testes",
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
