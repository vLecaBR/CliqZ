// Projects.js
const projects = [
  {
    id: "site-loja",
    title: "E-commerce Moderno",
    description:
      "Plataforma completa de e-commerce com carrinho, integração de pagamento e design responsivo.",
    details:
      "Este projeto foi desenvolvido para oferecer uma experiência moderna e segura de compra online. A aplicação conta com fluxo de cadastro/login de usuários, catálogo de produtos dinâmico, carrinho persistente, checkout integrado com Stripe, painel administrativo para gerenciamento de estoque e pedidos, além de API backend robusta conectada ao MongoDB. O design responsivo garante usabilidade em qualquer dispositivo.",
    about:
      "Plataforma pensada para conversão e performance, priorizando UX e SEO. Implementada com páginas SSR e lazy-loading de imagens.",
    short:
      "Demonstração das telas principais: home, produto, checkout e painel admin.",
    features: [
      "Cadastro e login com JWT e refresh tokens",
      "Catálogo com paginação e filtros",
      "Carrinho persistente em localStorage",
      "Checkout com Stripe e recibos por e-mail",
      "Painel admin com gerenciamento de produtos e pedidos",
    ],
    technologies: [
      "React.js",
      "Styled-components",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "JWT",
      "Cloudinary",
    ],
    link: "https://meuecommerce.com",
    repoFrontend: "https://github.com/vLecaBR/sales-website-model",
    repoBackend: "https://github.com/vLecaBR/sales-website-model-backend",
    media: [
      {
        type: "image",
        url: "https://victorleca.vercel.app/static/media/sales.3762d92311369eb22842.png",
      },
      {
        type: "video",
        // exemplo de vídeo mp4
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
      },
    ],
  },
  {
    id: "landing-artists",
    title: "Landing Page Artistas",
    description:
      "Landing page responsiva para promoção de artistas com galeria interativa.",
    details:
      "Projeto focado em apresentação visual e chamadas para ação (shows, contatos, portfolio).",
    features: ["Galeria interativa", "SEO otimizado", "Links sociais integrados"],
    technologies: ["React.js", "Styled-components", "Framer Motion"],
    link: "https://djfranzoni-portfolio.vercel.app/",
    repoFrontend: "https://github.com/vLecaBR/djfranzoni-portfolio",
    media: [
      {
        type: "image",
        url: "https://victorleca.vercel.app/static/media/djfranzoni.d7eeee493969a564b657.png",
      },
      {
        type: "video",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
    ],
  },
  {
    id: "landing-mecanica",
    title: "Landing Page Mecânica",
    description:
      "Landing page com agendamento e integração com Google Maps.",
    details:
      "Site para captar clientes locais, com foco em agendamento e informação clara de serviços.",
    technologies: ["Next.js", "TailwindCSS", "Google Maps API"],
    link: "https://mecanica.com",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=800&q=80",
      },
    ],
  },
];

export default projects;
