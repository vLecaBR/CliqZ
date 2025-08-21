import { Container, Wrapper, Title, Text, Shapes } from "./styles.js";

export default function AboutSection() {
  return (
    <Container>
      <Wrapper>
        <Shapes /> {/* animações/gradientes de fundo */}
        <div>
          <Title>Sobre a LK DIGITAL</Title>
          <Text>
            Somos uma agência apaixonada por inovação e design. Criamos experiências digitais que unem tecnologia, criatividade e resultados reais para o seu negócio se destacar online.
          </Text>
        </div>
      </Wrapper>
    </Container>
  );
}
