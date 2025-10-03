const projects = [
  {
    id: "site-loja",
    title: "E-commerce Moderno",
    description:
      "Plataforma completa de e-commerce com catálogo, carrinho, checkout e painel administrativo.",
    details:
      "E-commerce completo pensado para uma experiência de compra fluida e segura. Possui catálogo com filtros, carrinho persistente, checkout integrado com Stripe, recibos automáticos por e-mail e painel administrativo para gestão de produtos, pedidos e usuários. Backend robusto em Node.js/Express e banco MongoDB, frontend em React.js com Styled-components e animações via Framer Motion. Design totalmente responsivo e otimizado para performance e SEO.",
    about:
      "Cobre todo o ciclo de um e-commerce real, desde cadastro de usuários até checkout e gestão administrativa. Ideal para mostrar aplicações escaláveis e seguras.",
    short:
      "Demonstra telas principais: home, produto, checkout, carrinho e painel admin. Funcionalidades completas.",
    features: [
      "Cadastro e login com JWT e refresh tokens",
      "Catálogo com filtros e paginação",
      "Carrinho persistente no localStorage",
      "Checkout integrado com Stripe e e-mails automáticos",
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
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
      },
    ],
  },
  {
    id: "landing-artists",
    title: "Landing Page Artistas",
    description:
      "Landing page responsiva para promoção de artistas independentes.",
    details:
      "Landing page simples, focada na apresentação de artistas e seus trabalhos. Inclui galeria de imagens, links para redes sociais e seção de contato. Apesar de visualmente agradável, não possui backend, login ou funcionalidades complexas, sendo ideal para portfólio ou promoção inicial de artistas.",
    about:
      "Foco em experiência visual e interatividade, utilizando React.js, Styled-components e Framer Motion. Layout responsivo e leve, otimizado para dispositivos móveis, mas sem backend ou interatividade avançada.",
    short:
      "Landing page simples mostrando portfólio e links sociais. Funcionalidades básicas.",
    features: ["Galeria interativa", "Links sociais integrados", "SEO básico"],
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
      "Website pessoal para mostrar projetos, habilidades e contato profissional.",
    details:
      "Portfólio pessoal moderno, mostrando seções de apresentação, lista de projetos, skills e contato. Totalmente frontend, sem backend ou CMS, mas demonstra habilidades em React.js, Styled-components e Framer Motion. Responsivo e otimizado, perfeito para apresentar experiência profissional.",
    about:
      "Foco em UX, apresentação de projetos e legibilidade. Não possui funcionalidades avançadas como login ou integração de APIs externas.",
    short:
      "Apresenta projetos, skills e contato, totalmente estático. Funcionalidades simples, ideal para portfólio pessoal.",
    features: [
      "Seções de apresentação e skills",
      "Lista de projetos com detalhes",
      "Formulário de contato funcional (frontend)",
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
      "Landing page institucional para oficina mecânica, apresentando serviços e contato.",
    details:
      "Landing page institucional criada para clientes conhecerem a oficina. Inclui serviços oferecidos, informações de contato, endereço com mapa e imagens representativas. O foco é atrair clientes e facilitar contato via WhatsApp. Não possui backend, login ou sistema de agendamento interno.",
    about:
      "Projeto institucional com layout clean e direto, construído com Next.js e TailwindCSS. Responsivo e otimizado para dispositivos móveis, priorizando clareza e experiência do usuário.",
    short:
      "Página institucional mostrando serviços, localização e contato via WhatsApp.",
    features: ["Apresentação dos serviços", "Contato via WhatsApp", "Design responsivo e direto"],
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
