import { Container, Title, Grid, Card, Img } from "./styles.js";
import proj1 from "../../assets/project1.png";
import proj2 from "../../assets/project2.png";
import proj3 from "../../assets/project3.png";

const projects = [proj1, proj2, proj3]; // aqui coloca seus projetos

export default function PortfolioSection() {
  return (
    <Container>
      <Title>Portfólio</Title>
      <Grid>
        {projects.map((p, i) => (
          <Card key={i}>
            <Img src={p} alt={`Projeto ${i + 1}`} />
          </Card>
        ))}
      </Grid>
    </Container>
  );
}
