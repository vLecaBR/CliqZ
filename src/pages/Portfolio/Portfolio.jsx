import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  ImageWrapper,
  Image,
  Content,
  Title,
  Description,
  Button
} from "./styles";

const projects = [
  {
    id: "site-loja",
    title: "E-commerce Moderno",
    description:
      "Plataforma completa de e-commerce com carrinho, integração de pagamento e design responsivo.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
  },
  {
    id: "app-fitness",
    title: "App de Fitness",
    description:
      "Aplicativo mobile para treinos personalizados, monitoramento de progresso e integração com smartwatch.",
    image:
      "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=800&q=80"
  },
  {
    id: "landing-startup",
    title: "Landing Page Startup",
    description:
      "Landing page otimizada para conversão, com animações modernas e integração de CRM.",
    image:
      "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=800&q=80"
  }
];

export default function Portfolio() {
  return (
    <Container>
      <h1>Nosso Portfólio 🚀</h1>
      <Grid>
        {projects.map((proj) => (
          <Card key={proj.id}>
            <ImageWrapper>
              <Image src={proj.image} alt={proj.title} />
            </ImageWrapper>
            <Content>
              <Title>{proj.title}</Title>
              <Description>{proj.description}</Description>
              <Link to={`/portfolio/${proj.id}`}>
                <Button>Ver projeto</Button>
              </Link>
            </Content>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}
