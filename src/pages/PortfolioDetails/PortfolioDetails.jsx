// PortfolioDetails.jsx
import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import projects from "./Projects";
import {
  Container,
  Header,
  Section,
  Columns,
  ColumnText,
  ColumnMedia,
  MediaGrid,
  MediaItem,
  FeatureList,
  TechList,
  TechItem,
  Button,
} from "./styles";

export default function PortfolioDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  if (!project) {
    return (
      <Container>
        <Header>
          <h1>Projeto não encontrado :(</h1>
          <Link to="/portfolio">
            <Button as="span">Voltar</Button>
          </Link>
        </Header>
      </Container>
    );
  }

  const renderMedia = (m, idx) => {
    if (m.type === "image") {
      return <img src={m.url} alt={`${project.title}-media-${idx}`} />;
    }

    // Se for link do YouTube (embed) renderiza iframe
    if (
      typeof m.url === "string" &&
      (m.url.includes("youtube.com") ||
        m.url.includes("youtu.be") ||
        m.url.includes("youtube-nocookie.com") ||
        m.url.includes("embed"))
    ) {
      // garante o formato embeddable (se for youtube link comum, tenta converter)
      let src = m.url;
      if (m.url.includes("watch?v=")) {
        const id = m.url.split("watch?v=")[1].split("&")[0];
        src = `https://www.youtube.com/embed/${id}`;
      } else if (m.url.includes("youtu.be/")) {
        const id = m.url.split("youtu.be/")[1].split("?")[0];
        src = `https://www.youtube.com/embed/${id}`;
      }
      return (
        <iframe
          title={`video-${idx}`}
          src={src}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: "100%", height: "360px", display: "block" }}
        />
      );
    }

    // fallback: elemento <video>
    return (
      <video controls>
        <source src={m.url} type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>
    );
  };

  return (
    <Container>
      <Header>
        <h1>{project.title}</h1>
        <p>{project.details}</p>
      </Header>

      {/* Sobre */}
      <Section visible={visible} ref={ref}>
        <h2>Sobre o Projeto</h2>
        <p>
          {project.about ||
            "Projeto desenvolvido com foco em experiência do usuário, performance e escalabilidade. A implementação cobre desde o design responsivo até integrações externas e deploy."}
        </p>
      </Section>

      {/* Colunas: texto esquerda / mídia direita */}
      <Section visible={visible}>
        <Columns>
          <ColumnText>
            <h2>Visão Geral</h2>
            <p>
              {project.short ||
                "Aqui estão imagens e vídeos que mostram telas importantes e fluxos da aplicação — checkout, catálogo e painel de administração."}
            </p>
            <FeatureList>
              {(project.features || []).length > 0 ? (
                project.features.map((f, i) => <li key={i}>✅ {f}</li>)
              ) : (
                <>
                  <li>✅ Cadastro e autenticação</li>
                  <li>✅ Catálogo dinâmico</li>
                  <li>✅ Integração com provedores de pagamento</li>
                </>
              )}
            </FeatureList>
          </ColumnText>

          <ColumnMedia>
            <MediaGrid>
              {project.media.map((m, idx) => (
                <MediaItem key={idx}>{renderMedia(m, idx)}</MediaItem>
              ))}
            </MediaGrid>
          </ColumnMedia>
        </Columns>
      </Section>

      {/* Funcionalidades (mais detalhado) */}
      <Section visible={visible}>
        <h2>Funcionalidades Principais</h2>
        <FeatureList>
          {(project.features || [
            "Cadastro/login com JWT",
            "Catálogo filtrável",
            "Carrinho persistente",
            "Checkout integrado (Stripe)",
            "Painel admin para pedidos",
          ]).map((f, i) => (
            <li key={i}>✅ {f}</li>
          ))}
        </FeatureList>
      </Section>

      {/* Tecnologias */}
      <Section visible={visible}>
        <h2>Tecnologias</h2>
        <TechList>
          {project.technologies.map((tech, i) => (
            <TechItem key={i}>{tech}</TechItem>
          ))}
        </TechList>
      </Section>

      {/* Links / CTA */}
      <Section visible={visible} style={{ textAlign: "center" }}>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          {project.repoFrontend && (
            <a href={project.repoFrontend} target="_blank" rel="noreferrer">
              <Button as="span">Frontend (repo)</Button>
            </a>
          )}
          {project.repoBackend && (
            <a href={project.repoBackend} target="_blank" rel="noreferrer">
              <Button as="span">Backend (repo)</Button>
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer">
              <Button as="span" size="lg">
                Acessar Projeto
              </Button>
            </a>
          )}
        </div>
      </Section>
    </Container>
  );
}
