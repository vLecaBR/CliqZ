import { Container, Wrapper, Title, Text, Shape } from "./styles.js";

export default function AboutSection() {
  return (
    <Container>
      <Shape top="10%" left="15%" size={250} />
      <Shape top="50%" left="70%" size={200} />
      <Shape top="30%" left="40%" size={300} />
      <Wrapper>
        <Title>Sobre a LK DIGITAL</Title>
        <Text>
          Somos uma agência apaixonada por inovação e design. Criamos experiências digitais que unem tecnologia, criatividade e resultados reais para o seu negócio se destacar online.
        </Text>
      </Wrapper>
    </Container>
  );
}
