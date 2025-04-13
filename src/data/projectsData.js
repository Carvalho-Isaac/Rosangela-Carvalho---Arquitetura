const projectsData = [
    {
        id: 1,
        name: "Santa Maria",
        type: "Casa de Campo",
        year: 2020,
        description: "O projeto da Sede Fazenda Santa Maria em São Sebastião organiza blocos distintos no entorno da piscina central, abrigando área social e íntima, lazer e garagens e com suítes de hóspedes",
        get images() {
            const modules = import.meta.glob('../assets/rendersproject/1-santa-maria-*.webp', { eager: true });
            return Object.values(modules).map(m => m.default);
        },
        tags: ["arquitetura", "residencial"],
    },
    {
        id: 2,
        name: "Casa Cor",
        type: "Mostra",
        year: 2017,
        description: "Spa Casa Cor Alagoas 2017 - A proposta buscou integrar uma área de estar e relaxamento através de espaços amplos e jardins verticais internos.",
        get images() {
            const modules = import.meta.glob('../assets/rendersproject/2-casacor2017-*.webp', { eager: true });
            return Object.values(modules).map(m => m.default);
        },
        tags: ["interiores", "evento"],
    },
    {
        id: 3,
        name: "Residência R|F",
        type: "Residencial",
        year: 2003,
        description: "Projeto residencial unifamiliar realizado 2003 com partido arquitetônico que se utiliza de grandes beirais de proteção térmica e amplas varandas para composição dos volumes de fachadas.",
        get images() {
            const modules = import.meta.glob('../assets/rendersproject/3-residencia-rf-*.webp', { eager: true });
            return Object.values(modules).map(m => m.default);
        },        
        tags: ["arquitetura", "residencial"],
    },
    {
        id: 4,
        name: "Residência R|L",
        type: "Residencial",
        year: 2023,
        description: "Residência unifamiliar no condomínio Ouro Verde em pavimento térreo com área construída total de 297,38m²",
        get images() {
            const modules = import.meta.glob('../assets/rendersproject/4-residencia-rl-*.webp', { eager: true });
            return Object.values(modules).map(m => m.default);
        },        
        tags: ["arquitetura", "residencial"],
    },
    {
        id: 5,
        name: "FDS Coworking",
        type: "Comercial",
        year: 2018,
        description: "Projeto para FDS Coworking – Integrando antigos salões de fumo e Containers. Utilizamos uma área de antigos salões de fumo no centro de Arapiraca na Rua Olavo Bilac onde foram dispostas salas de treinamento, copa, recepção e banheiros e um pátio interno recebeu intervenção em containers para acolher novas salas empresariais.",
        get images() {
            const modules = import.meta.glob('../assets/rendersproject/5-fds-coworking-*.webp', { eager: true });
            return Object.values(modules).map(m => m.default);
        },        
        tags: ["arquitetura", "comercial", "coworking"],
    },
    {
        id: 6,
        name: "+Parque",
        type: "Projeto Urbanístico",
        year: 2024,
        description: "O projeto nasceu como uma brincadeira para homenagear o centenário de Arapiraca e sua cultura das Destaladeiras de fumo. Esse projeto está alinhado com as nova tecnologias de Realidade Aumentada do parceiro Phi Criativo",
        get images() {
            const modules = import.meta.glob('../assets/rendersproject/6-mais-parque-*.webp', { eager: true });
            return Object.values(modules).map(m => m.default);
        },        
        tags: ["urbanismo"],
    },
];

export default projectsData;