import { useParams, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import projects from "./Projects"; // importa os mesmos dados
import {
  Container,
  Header,
  Section,
  MediaGrid,
  MediaItem,
  TechList,
  TechItem,
  Button,
} from "./styles";

export default function PortfolioDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id); // procura pelo id
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
      { threshold: 0.2 }
    );
    observer.observe(ref.current);
  }, []);

  if (!project) {
    return (
      <Container>
        <Header>
          <h1>Projeto não encontrado :(</h1>
          <Link to="/portfolio">
            <Button>Voltar</Button>
          </Link>
        </Header>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <h1>{project.title}</h1>
        <p>{project.details}</p>
      </Header>

      <Section ref={ref} visible={visible}>
        <h2>Mídia do Projeto</h2>
        <MediaGrid>
          {project.media.map((m, idx) => (
            <MediaItem key={idx}>
              {m.type === "image" ? (
                <img src={m.url} alt={`media-${idx}`} />
              ) : (
                <video controls>
                  <source src={m.url} type="video/mp4" />
                  Seu navegador não suporta vídeo.
                </video>
              )}
            </MediaItem>
          ))}
        </MediaGrid>
      </Section>

      <Section visible={visible}>
        <h2>Tecnologias Utilizadas</h2>
        <TechList>
          {project.technologies.map((tech, idx) => (
            <TechItem key={idx}>{tech}</TechItem>
          ))}
        </TechList>
      </Section>

      <Section visible={visible} style={{ textAlign: "center" }}>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <Button>Acessar Projeto</Button>
        </a>
      </Section>
    </Container>
  );
}
