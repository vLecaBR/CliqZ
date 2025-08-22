import {
  Container,
  Wrapper,
  Form,
  Input,
  Textarea,
  Button,
  InfoBox,
  InfoItem,
  IconWrapper,
  Title
} from "./styles";
import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <Container>
      <Title>Entre em Contato ✨</Title>
      <Wrapper>
        {/* Formulário */}
        <Form>
          <Input type="text" placeholder="Seu nome" required />
          <Input type="email" placeholder="Seu email" required />
          <Textarea placeholder="Sua mensagem..." rows="6" required />
          <Button type="submit">Enviar Mensagem 🚀</Button>
        </Form>

        {/* Infos de contato */}
        <InfoBox>
          <InfoItem>
            <IconWrapper>
              <FaEnvelope />
            </IconWrapper>
            <span>contato@seudominio.com</span>
          </InfoItem>
          <InfoItem>
            <IconWrapper>
              <FaWhatsapp />
            </IconWrapper>
            <span>(11) 99999-9999</span>
          </InfoItem>
          <InfoItem>
            <IconWrapper>
              <FaLinkedin />
            </IconWrapper>
            <span>/in/seulinkedin</span>
          </InfoItem>
        </InfoBox>
      </Wrapper>
    </Container>
  );
}
