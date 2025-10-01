// src/data/projectsData.js
const projects = [
{
  id: "site-loja",
  title: "E-commerce Moderno",
  description:
    "Plataforma completa de e-commerce com carrinho, integração de pagamento e design responsivo.",
  details:
    "Este projeto foi desenvolvido para oferecer uma experiência moderna e segura de compra online. A aplicação conta com fluxo de cadastro/login de usuários, catálogo de produtos dinâmico, carrinho persistente, checkout integrado com Stripe, painel administrativo para gerenciamento de estoque e pedidos, além de API backend robusta conectada ao MongoDB. O design responsivo garante usabilidade em qualquer dispositivo, e a arquitetura foi pensada para escalabilidade e performance.",
  technologies: [
    "React.js",
    "Styled-components",
    "Framer Motion",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Stripe API",
    "JWT Authentication",
    "Cloudinary (uploads de imagens)",
    "Vercel + Render (deploy)"
  ],
  link: "https://meuecommerce.com", // substitua pelo seu deploy real
  repoFrontend: "https://github.com/vLecaBR/sales-website-model",
  repoBackend: "https://github.com/vLecaBR/sales-website-model-backend",
  media: [
    {
      type: "image",
      url: "https://victorleca.vercel.app/static/media/sales.3762d92311369eb22842.png"
    },
    {
      type: "video",
      url: "https://www.w3schools.com/html/mov_bbb.mp4"
    }
  ]
},
 {
  id: "landing-artists",
  title: "Landing Page Artistas",
  description:
    "Landing page moderna e responsiva para promoção de artistas independentes, com galeria interativa e integração com redes sociais.",
  details:
    "Este projeto foi desenvolvido para aumentar a presença digital de artistas independentes, permitindo que apresentem seus trabalhos de forma profissional. A página possui design responsivo, animações suaves e componentes reutilizáveis. Inclui uma galeria de imagens organizada, links sociais, botão de contato e seção de destaques. O foco foi entregar uma experiência imersiva, leve e otimizada para SEO.",
  technologies: [
    "React.js",
    "Styled-components",
    "Framer Motion",
    "React Router",
    "Vercel Hosting",
    "Figma (UI/UX Design)"
  ],
  link: "https://artistas.com",
  repo: "https://github.com/vLecaBR/djfranzoni-portfolio", // opcional, se quiser linkar o repo
  media: [
    {
      type: "image",
      url: "https://victorleca.vercel.app/static/media/djfranzoni.d7eeee493969a564b657.png"
    },
    {
      type: "video",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ" // exemplo de vídeo demo
    }
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
