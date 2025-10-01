// src/data/projectsData.js
const projects = [
  {
    id: "site-loja",
    title: "E-commerce Moderno",
    description:
      "Plataforma completa de e-commerce com carrinho, integração de pagamento e design responsivo.",
    details:
      "Projeto desenvolvido para trazer uma experiência moderna de compra online, com painel administrativo, integração de pagamento via Stripe e responsividade total.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    link: "https://meuecommerce.com",
    media: [
      { type: "image", url: "https://victorleca.vercel.app/static/media/sales.3762d92311369eb22842.png" },
      { type: "video", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
    ],
  },
  {
    id: "landing-artists",
    title: "Landing Page Artistas",
    description:
      "Landing page para promoção de artistas, com galeria de trabalhos e integração com redes sociais.",
    details:
      "Landing page feita para aumentar a presença digital de artistas independentes. Contém galeria de imagens, links sociais e área para contratação.",
    technologies: ["React", "Styled-components", "Framer Motion"],
    link: "https://artistas.com",
    media: [
      { type: "image", url: "https://victorleca.vercel.app/static/media/djfranzoni.d7eeee493969a564b657.png" },
    ],
  },
  {
    id: "landing-mecanica",
    title: "Landing Page Mecânica",
    description:
      "Landing page para oficina mecânica, com agendamento de serviços e integração com Google Maps.",
    details:
      "Site desenvolvido para oficinas mecânicas captarem clientes via web, com agendamento de serviços e localização fácil pelo Google Maps.",
    technologies: ["Next.js", "TailwindCSS", "Google Maps API"],
    link: "https://mecanica.com",
    media: [
      { type: "image", url: "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=800&q=80" },
    ],
  },
];

export default projects;
