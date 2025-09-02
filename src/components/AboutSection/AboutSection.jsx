import { Container, Wrapper, Title, Text, Shape, Line, Particle } from "./styles.js";

export default function AboutSection() {
  const particles = Array.from({ length: 20 }); // 20 partículas

  return (
    <Container>
      {/* Shapes grandes flutuantes */}
      <Shape top="10%" left="15%" size={250} />
      <Shape top="50%" left="70%" size={200} />
      <Shape top="30%" left="40%" size={300} />

      {/* Linhas finas horizontais */}
      <Line top="20%" delay={0} />
      <Line top="60%" delay={2} />
      <Line top="80%" delay={4} />

      {/* Partículas pequenas */}
      {particles.map((_, i) => (
        <Particle 
          key={i} 
          size={Math.random() * 6 + 4} 
          top={`${Math.random() * 100}%`} 
          left={`${Math.random() * 100}%`} 
          duration={Math.random() * 10 + 5} 
        />
      ))}

      <Wrapper>
        <Title>Sobre a CliqZ</Title>
        <Text>
          Somos uma agência apaixonada por inovação e design. Criamos experiências digitais que unem tecnologia, criatividade e resultados reais para o seu negócio se destacar online.
        </Text>
      </Wrapper>
    </Container>
  );
}
