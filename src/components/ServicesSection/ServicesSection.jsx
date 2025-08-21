import { Container, Title, Grid, Card, Icon, CardTitle, Desc } from "./styles.js";
import { FaCode, FaPalette, FaBullhorn, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Desenvolvimento Web",
    desc: "Sites rápidos, modernos e responsivos para destacar seu negócio online."
  },
  {
    icon: <FaPalette />,
    title: "Design UI/UX",
    desc: "Experiências digitais com design criativo e centrado no usuário."
  },
  {
    icon: <FaBullhorn />,
    title: "Marketing Digital",
    desc: "Estratégias para aumentar visibilidade e atrair novos clientes."
  },
  {
    icon: <FaMobileAlt />,
    title: "Aplicativos Mobile",
    desc: "Soluções mobile inovadoras para iOS e Android."
  },
];

export default function ServicesSection() {
  return (
    <Container>
      <Title>O que fazemos</Title>
      <Grid>
        {services.map((s, i) => (
          <Card key={i}>
            <Icon>{s.icon}</Icon>
            <CardTitle>{s.title}</CardTitle>
            <Desc>{s.desc}</Desc>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}
