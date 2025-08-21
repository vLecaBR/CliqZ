import { Container, Title, Subtitle, CTA, BgAnim } from "./styles.js";

export default function Hero() {
  return (
    <Container>
      <BgAnim /> {/* gradiente animado */}
      <div>
        <Title>
          Transformando <span>ideias</span> em experiências digitais
        </Title>
        <Subtitle>
          Somos a LK DIGITAL — inovação, design e tecnologia para o seu negócio
          se destacar online.
        </Subtitle>
        <CTA href="/contato">Quero um orçamento</CTA>
      </div>
    </Container>
  );
}
