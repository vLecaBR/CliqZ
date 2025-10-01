import { Link } from "react-router-dom";
import projects from "../../pages/PortfolioDetails/Projects"; // importa os dados
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

export default function Portfolio() {
  return (
    <Container>
      <h1>Nosso Portfólio</h1>
      <Grid>
        {projects.map((proj) => (
          <Card key={proj.id}>
            <ImageWrapper>
              <Image src={proj.media[0].url} alt={proj.title} />
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
