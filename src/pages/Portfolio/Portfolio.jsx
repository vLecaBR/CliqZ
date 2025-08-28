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
      "https://victorleca.vercel.app/static/media/sales.3762d92311369eb22842.png"
  },
  {
    id: "landing-artists",
    title: "Landing Page Artistas",
    description:
      "Landing page para promoção de artistas, com galeria de trabalhos e integração com redes sociais, contratar, etc.",
    image:
      "https://victorleca.vercel.app/static/media/djfranzoni.d7eeee493969a564b657.png"
  },
  {
    id: "landing-mecanica",
    title: "Landing Page Mecânica",
    description:
      "Landing page para oficina mecânica, com agendamento de serviços e integração com Google Maps.",
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
