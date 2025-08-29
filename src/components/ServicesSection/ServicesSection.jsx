// ServicesSection.jsx
import { Container, Title, Grid, Card, Icon, CardTitle, Desc, Stats } from "./styles.js";
import { FaCode, FaPalette, FaBullhorn, FaMobileAlt, FaRobot } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Desenvolvimento Web",
    desc: "Sites modernos, rápidos e responsivos para destacar sua marca online.",
    stats: "+73% de aumento em conversões com páginas otimizadas."
  },
  {
    icon: <FaPalette />,
    title: "Design UI/UX",
    desc: "Experiências digitais criativas e centradas no usuário.",
    stats: "Até 80% mais engajamento com interfaces intuitivas."
  },
  {
    icon: <FaBullhorn />,
    title: "Marketing Digital",
    desc: "Campanhas estratégicas para aumentar visibilidade e atrair clientes.",
    stats: "Negócios têm em média +120% de alcance com SEO e Ads bem feitos."
  },
  {
    icon: <FaRobot />,
    title: "Automação Inteligente",
    desc: "Fluxos automáticos, bots no WhatsApp, disparos de e-mails e integrações que economizam tempo e aumentam eficiência.",
    stats: "Até 30% de ganho de produtividade com automação de processos."
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
            <Stats>{s.stats}</Stats>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}
