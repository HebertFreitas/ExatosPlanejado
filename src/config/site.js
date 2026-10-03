// Content for the Exatos Planejados landing. Items marked PENDENTE still need confirmation from the client.

const whatsappNumber = "5531988311283";

export const brand = {
  name: "Exatos",
  kind: "Planejados",
  fullName: "Exatos Planejados",
  tagline: "Móveis planejados sob medida, do projeto à instalação.",
  logo: "/gallery/logo_exato.png",
};

export const seo = {
  title: "Exatos Planejados | Móveis planejados sob medida",
  description:
    "Cozinhas, dormitórios, closets e home office planejados sob medida. Peça seu orçamento pelo WhatsApp.",
  ogTitle: "Exatos Planejados",
  ogDescription: "Móveis planejados sob medida, do projeto à instalação.",
  ogImage: "/gallery/exato-01.jpg",
  themeColor: "#263a1f",
  fontsUrl:
    "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300..600;1,300..500&family=Jost:wght@400;500;600;700&display=swap",
};

// Which sections appear. visit is off until there is a real address (PENDENTE).
export const sections = {
  intro: true,
  features: true,
  team: true,
  pricing: false,
  ambient: false,
  reviews: false,
  app: false,
  visit: false,
};

// 'app' opens the store modal, 'whatsapp' opens contact.whatsapp, 'link' opens booking.url.
export const booking = {
  mode: "whatsapp",
  url: "",
};

export const apps = {
  ios: "",
  android: "",
};

export const contact = {
  whatsapp: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento de móveis planejados.")}`,
  phoneHref: "tel:+5531988311283",
  phoneLabel: "(31) 98831-1283",
  instagram: "https://www.instagram.com/exatos_planejados/",
  // PENDENTE: cidade e endereço reais.
  address: ["Atendimento com visita técnica", "Região metropolitana de BH, MG"],
  mapsLink: "",
  mapsEmbed: "",
};

// PENDENTE: horários placeholder, confirmar com o cliente.
export const hours = [
  ["Seg a sex", "8h às 18h"],
  ["Sábado", "8h às 12h"],
];

export const nav = [
  ["inicio", "Início"],
  ["experiencia", "Como funciona"],
  ["equipe", "Equipe"],
];

export const copy = {
  cta: "Solicitar orçamento",
  ctaShort: "Pedir orçamento",
  hero: {
    line1: "Seu espaço,",
    line2: "na medida exata.",
    text: "Cozinhas, dormitórios, closets e home office planejados sob medida, do projeto à instalação.",
    link: "Como funciona",
    slidesLabel: "Projetos em destaque",
  },
  intro: {
    first: "Do primeiro contato ",
    second: "à instalação.",
    text: "Cada móvel é pensado para o seu espaço e a sua rotina. Você acompanha todas as etapas, do orçamento à montagem final.",
    stepsLabel: "Como funciona",
  },
  features: {
    first: "Ambientes que ",
    second: "fazem diferença.",
    action: "Ver serviços",
  },
  team: {
    label: "Equipe",
    title: "Quem faz o seu projeto",
    photoAlt: "Foto de Jadson Assis",
  },
  pricing: { title: "Serviços" },
  ambient: { first: "Nossos ", second: "trabalhos." },
  reviews: { label: "Depoimentos", title: "O que dizem", source: "Google" },
  visit: {
    first: "Fale ",
    second: "com a gente.",
    mapsAction: "Abrir no mapa",
  },
  app: {
    first: "",
    second: "",
    text: "",
    footerText: "",
    modalTitle: "",
    modalText: "",
    screens: [],
  },
};

// PENDENTE: sem números reais no briefing, a faixa de números fica vazia.
export const stats = [];

export const process = [
  [
    "Entre em contato",
    "Chame no WhatsApp e conte o que você precisa para o seu ambiente.",
  ],
  ["Orçamento", "Medimos o espaço e apresentamos o projeto com o orçamento."],
  [
    "Preparação",
    "Com o projeto aprovado, os móveis são produzidos sob medida.",
  ],
  ["Instalação", "Nossa equipe monta tudo no local, com acabamento cuidadoso."],
];

// PENDENTE: o briefing trouxe só "Somos diferentes"; textos sugeridos para o cliente validar.
export const features = [
  {
    tag: "Cozinhas",
    title: "Projeto sob medida",
    text: "Cada centímetro aproveitado de acordo com o seu espaço.",
    size: "large",
    photo: {
      src: "/gallery/exato-02.jpg",
      alt: "Cozinha planejada em madeira com ilha de pedra e banquetas",
      width: 1200,
      height: 1500,
    },
  },
  {
    tag: "Dormitórios",
    title: "Acabamento de marcenaria",
    text: "Portas, puxadores e iluminação pensados nos detalhes.",
    size: "wide",
    photo: {
      src: "/gallery/exato-05.jpg",
      alt: "Guarda-roupa planejado com closet iluminado e bancada de estudo",
      width: 1600,
      height: 1200,
    },
  },
  {
    tag: "Home office",
    title: "Funcional e bonito",
    text: "Nichos e bancadas que organizam a rotina.",
    photo: {
      src: "/gallery/exato-06.jpg",
      alt: "Home office planejado com nicho iluminado e bancada",
      width: 1200,
      height: 1500,
    },
  },
  {
    tag: "Instalação",
    title: "Montagem pela equipe",
    text: "Quem projeta acompanha até a instalação.",
    photo: {
      src: "/gallery/exato-07.jpg",
      alt: "Dormitório com cabeceira e guarda-roupa planejados",
      width: 1200,
      height: 1500,
    },
  },
];

export const heroSlides = [
  {
    src: "/gallery/exato-01.jpg",
    alt: "Sala com estante planejada em madeira iluminada",
  },
  { src: "/gallery/exato-04.jpg", alt: "Cozinha planejada com ilha de pedra" },
  {
    src: "/gallery/exato-03.jpg",
    alt: "Sala com painel ripado e estante planejada",
  },
];

// PENDENTE: descrição sugerida, confirmar com o cliente.
export const team = [
  {
    name: 'Jadson Assis',
    role: 'Marceneiro',
    text: 'Acompanha cada projeto de perto, da medição à montagem, para que cada móvel fique na medida exata do seu espaço.',
    photo: '/gallery/jadson.png',
  },
];

export const prices = [];
export const ambient = [];
export const reviews = [];
export const appPerks = [];
