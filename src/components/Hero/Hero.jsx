import { Container, Title, Subtitle, CTA, Shape, Line, Particle } from "./styles.js";

export default function Hero() {
  const particles = Array.from({ length: 30 });

  return (
    <Container>
      {/* Shapes flutuantes */}
      <Shape top="10%" left="10%" size={200} />
      <Shape top="50%" left="80%" size={150} />
      <Shape top="35%" left="50%" size={250} />

      {/* Linhas horizontais */}
      <Line top="20%" delay={0} />
      <Line top="60%" delay={2} />
      <Line top="80%" delay={4} />

      {/* Partículas pequenas */}
      {particles.map((_, i) => (
        <Particle
          key={i}
          size={Math.random() * 6 + 3}
          top={`${Math.random() * 100}%`}
          left={`${Math.random() * 100}%`}
          duration={Math.random() * 10 + 5}
        />
      ))}

      <div>
        <Title>
          Transformando <span>ideias</span> em experiências digitais
        </Title>
        <Subtitle>
          Somos a CliqZ: inovação, design e tecnologia para o seu negócio se destacar online.
          Nossa missão é conectar criatividade e estratégia, entregando soluções que encantam usuários
          e geram resultados reais.
        </Subtitle>
        <Subtitle>
          Do desenvolvimento web à experiência mobile, do branding à estratégia digital,
          criamos produtos que unem estética, performance e impacto de mercado.
        </Subtitle>
        <Subtitle>
          Cada projeto é pensado para maximizar resultados, engajamento e crescimento do seu negócio,
          usando as melhores tecnologias e práticas do mercado.
        </Subtitle>
        <CTA href="/contato">Quero um orçamento</CTA>
      </div>
    </Container>
  );
}
