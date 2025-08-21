import { Container, Title, Text, ImageWrapper, Wrapper } from "./styles.js";
import aboutImg from "../../assets/about-placeholder.png"; // substitua pela sua imagem

export default function AboutSection() {
  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <img src={aboutImg} alt="Sobre a LK DIGITAL" />
        </ImageWrapper>
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
