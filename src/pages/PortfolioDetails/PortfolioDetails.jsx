import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import projects from "./Projects";
import {
  Container,
  Header,
  SectionCard,
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
    if (m.type === "image")
      return <img src={m.url} alt={`${project.title}-media-${idx}`} />;

    if (
      typeof m.url === "string" &&
      (m.url.includes("youtube.com") ||
        m.url.includes("youtu.be") ||
        m.url.includes("embed"))
    ) {
      let src = m.url;
      if (m.url.includes("watch?v="))
        src = `https://www.youtube.com/embed/${
          m.url.split("watch?v=")[1].split("&")[0]
        }`;
      else if (m.url.includes("youtu.be/"))
        src = `https://www.youtube.com/embed/${
          m.url.split("youtu.be/")[1].split("?")[0]
        }`;

      return (
        <iframe
          key={idx}
          title={`video-${idx}`}
          src={src}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: "100%", height: "360px", display: "block" }}
        />
      );
    }

    return (
      <video key={idx} controls>
        <source src={m.url} type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>
    );
  };

  return (
    <Container>
      {/* Header só com o título */}
      <Header>
        <h1>{project.title}</h1>
      </Header>

      {/* Card 1: Detalhes + Sobre + Funcionalidades + Mídia */}
      <SectionCard visible={visible} ref={ref}>
        <Columns>
          <ColumnText>
            <h2>Sobre o Projeto</h2>
            <p>{project.details}</p>

            <h2>Visão Geral</h2>
            <p>
              {project.about ||
                "Projeto desenvolvido com foco em UX, performance e escalabilidade, cobrindo desde design responsivo até integração de APIs."}
            </p>

            <h2>Funcionalidades</h2>
            <FeatureList>
              {(project.features || [
                "Cadastro/login com JWT",
                "Catálogo dinâmico",
                "Carrinho persistente",
                "Checkout integrado",
                "Painel admin",
              ]).map((f, i) => (
                <li key={i}>✅ {f}</li>
              ))}
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


      {/* Card 2: Tecnologias */}

        <h2>Tecnologias</h2>
        <TechList>
          {project.technologies.map((tech, i) => (
            <TechItem key={i}>{tech}</TechItem>
          ))}
        </TechList>
      </SectionCard>

      {/* Card 3: Links / CTA */}
      <SectionCard visible={visible} style={{ textAlign: "center" }}>
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
              <Button as="span" size="lg">Acessar Projeto</Button>
            </a>
          )}
        </div>
      </SectionCard>
    </Container>
  );
}
