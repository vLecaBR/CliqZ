import { Container, Title, Subtitle, CTA, Shape, Line, Particle } from "./styles.js";

export default function Hero() {
  const particles = Array.from({ length: 25 }); // 25 partículas pequenas

  return (
    <Container>
      {/* Shapes grandes flutuantes */}
      <Shape top="15%" left="10%" size={200} />
      <Shape top="50%" left="80%" size={150} />
      <Shape top="30%" left="50%" size={250} />

      {/* Linhas finas horizontais */}
      <Line top="25%" delay={0} />
      <Line top="60%" delay={2} />
      <Line top="75%" delay={4} />

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
          Somos a LK DIGITAL — inovação, design e tecnologia para o seu negócio se destacar online.
        </Subtitle>
        <CTA href="/contato">Quero um orçamento</CTA>
      </div>
    </Container>
  );
}
