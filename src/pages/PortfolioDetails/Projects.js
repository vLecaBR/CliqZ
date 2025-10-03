const projects = [
  {
    id: "site-loja",
    title: "E-commerce Moderno",
    description:
      "Plataforma robusta de e-commerce, com experiência de compra otimizada, catálogo dinâmico, checkout seguro e painel administrativo completo.",
    details:
      "Este projeto é um e-commerce fullstack que cobre todo o ciclo de uma loja virtual moderna. Desenvolvido para oferecer uma experiência de compra prática, fluida e segura, ele conta com catálogo de produtos com filtros inteligentes, carrinho persistente, checkout integrado ao Stripe para pagamentos, geração de recibos automáticos por e-mail e painel administrativo para gerenciamento de produtos, pedidos e usuários. O backend foi construído em Node.js com Express e banco de dados MongoDB, garantindo escalabilidade e segurança. O frontend utiliza React.js com Styled-components e animações do Framer Motion, trazendo design responsivo, performance otimizada e boas práticas de SEO.",
    about:
      "Ideal para demonstrar habilidades em aplicações escaláveis e seguras. Mostra domínio de tecnologias fullstack, integração com APIs externas e boas práticas de arquitetura.",
    short:
      "Plataforma de e-commerce com catálogo dinâmico, checkout com Stripe e painel administrativo completo.",
    features: [
      "Autenticação segura com JWT e refresh tokens",
      "Catálogo de produtos com filtros e paginação",
      "Carrinho persistente salvo no localStorage",
      "Checkout integrado com Stripe + recibos automáticos",
      "Painel admin para gerenciamento de produtos, pedidos e usuários",
      "Integração com Cloudinary para upload e otimização de imagens",
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
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
      },
    ],
  },
  {
    id: "landing-artists",
    title: "Landing Page Artistas",
    description:
      "Landing page responsiva para promoção de artistas independentes, com foco em apresentação visual e interatividade.",
    details:
      "Projeto de landing page voltado para divulgação de artistas e seus trabalhos, com ênfase na estética e experiência visual. Inclui galeria interativa de imagens, links para redes sociais e seção de contato, funcionando como um cartão de visita digital moderno. Construído em React.js com Styled-components e Framer Motion, possui layout responsivo e otimizado para dispositivos móveis. Apesar de simples e sem backend, é altamente eficaz para portfólios pessoais, lançamentos e apresentações rápidas.",
    about:
      "Demonstra a capacidade de criar interfaces atrativas e fluidas, com atenção especial ao design responsivo e experiência do usuário.",
    short:
      "Landing page interativa para artistas, com galeria, links sociais e contato rápido.",
    features: [
      "Galeria de imagens animada e interativa",
      "Integração direta com redes sociais",
      "Seção de contato simplificada",
      "SEO básico para indexação",
    ],
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
    id: "my-portfolio",
    title: "Portfólio Pessoal",
    description:
      "Site pessoal desenvolvido para apresentar projetos, habilidades e contato profissional de forma moderna e objetiva.",
    details:
      "Portfólio digital criado para centralizar informações profissionais e destacar projetos desenvolvidos. Conta com seções de apresentação, lista detalhada de projetos, habilidades técnicas e formulário de contato funcional. Apesar de ser totalmente frontend, demonstra domínio em criação de layouts modernos e responsivos, além de boa organização de código. Utiliza React.js, Styled-components e Framer Motion para animações suaves, sendo otimizado para SEO e performance.",
    about:
      "Serve como vitrine pessoal, destacando experiência, skills e trabalhos desenvolvidos. Ótimo exemplo de site institucional individual.",
    short:
      "Portfólio moderno com projetos, habilidades e formulário de contato.",
    features: [
      "Seção de introdução com resumo profissional",
      "Lista de projetos detalhada",
      "Exibição de habilidades técnicas (skills)",
      "Formulário de contato funcional integrado",
    ],
    technologies: ["React.js", "Styled-components", "Framer Motion"],
    link: "https://victorleca.vercel.app",
    repoFrontend: "https://github.com/vLecaBR/my-portfolio",
    media: [
      {
        type: "image",
        url: "https://victorleca.vercel.app/static/media/portfolio-screenshot.png",
      },
    ],
  },
  {
    id: "landing-mecanica",
    title: "Landing Page Mecânica",
    description:
      "Landing page institucional para oficina mecânica, apresentando serviços, contato e localização.",
    details:
      "Landing page criada para uma oficina mecânica, com o objetivo de atrair clientes e facilitar o contato. Apresenta os principais serviços oferecidos, informações de contato rápido, botão para iniciar conversa via WhatsApp e integração com Google Maps para exibir a localização. Construída em React.js com Styled-components, o design é direto, responsivo e pensado para dispositivos móveis, garantindo que potenciais clientes encontrem informações de forma prática.",
    about:
      "Demonstra habilidade em desenvolver sites institucionais objetivos e focados em conversão, com clareza na apresentação das informações.",
    short:
      "Página institucional para oficina, com serviços, WhatsApp e localização no mapa.",
    features: [
      "Apresentação clara dos serviços oferecidos",
      "Contato rápido via botão de WhatsApp",
      "Mapa integrado com localização da oficina",
      "Design responsivo otimizado para mobile",
    ],
    technologies: ["React.js", "Styled-components", "Google Maps API"],
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
