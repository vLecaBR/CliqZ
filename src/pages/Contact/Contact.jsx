import { useState } from "react";
import {
  Page,
  Card,
  Left,
  Right,
  Title,
  Subtitle,
  Form,
  Field,
  Label,
  Input,
  Textarea,
  Row,
  Actions,
  BtnPrimary,
  BtnGhost,
  Info,
  Success,
  FloatingWhats,
  Reveal
} from "./styles.js";
import { FaPaperPlane, FaPhoneAlt, FaEnvelope, FaPaperclip, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    file: null
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (name === "file") {
      setState((s) => ({ ...s, file: files[0] || null }));
    } else {
      setState((s) => ({ ...s, [name]: value }));
    }
    setErrors((e) => ({ ...e, [name]: undefined }));
  }

  function validate() {
    const err = {};
    if (!state.name.trim()) err.name = "Coloque seu nome";
    if (!state.email.match(/^\S+@\S+\.\S+$/)) err.email = "E-mail inválido";
    if (!state.message.trim() || state.message.length < 15) err.message = "Mensagem muito curta (mínimo 15 caracteres)";
    return err;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length) {
      setErrors(err);
      return;
    }

    setSending(true);
    // Simulação de envio — substitua por fetch para Formspree / API real
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    setSuccess(true);
    setState({ name: "", email: "", subject: "", message: "", file: null });
    setTimeout(() => setSuccess(false), 6000);
  }

  return (
    <Page>
      <Card role="region" aria-labelledby="contact-title">
        <Left>
          <Reveal>
            <Title id="contact-title">Fala com a gente</Title>
            <Subtitle>
              Quer tirar um projeto do papel ou só trocar ideia sobre estratégia digital? Preenche aí que a gente responde rápido — ou abre o Whats.
            </Subtitle>

            <Info>
              <div><FaPhoneAlt /> <strong>Whats:</strong> <a href="https://wa.me/5599999999999" target="_blank" rel="noreferrer">+55 (99) 99999-9999</a></div>
              <div><FaEnvelope /> <strong>E-mail:</strong> <a href="mailto:contato@cliqz.com.br">contato.cliqz.com.br</a></div>
            </Info>
          </Reveal>
        </Left>

        <Right>
          <Form onSubmit={handleSubmit} noValidate>
            <Row>
              <Field>
                <Label htmlFor="name">Nome</Label>
                <Input id="name" name="name" value={state.name} onChange={handleChange} aria-invalid={!!errors.name} />
                {errors.name && <small role="alert">{errors.name}</small>}
              </Field>

              <Field>
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" name="email" type="email" value={state.email} onChange={handleChange} aria-invalid={!!errors.email} />
                {errors.email && <small role="alert">{errors.email}</small>}
              </Field>
            </Row>

            <Field>
              <Label htmlFor="subject">Assunto (opcional)</Label>
              <Input id="subject" name="subject" value={state.subject} onChange={handleChange} />
            </Field>

            <Field>
              <Label htmlFor="message">Mensagem</Label>
              <Textarea id="message" name="message" rows="6" value={state.message} onChange={handleChange} aria-invalid={!!errors.message} />
              {errors.message && <small role="alert">{errors.message}</small>}
            </Field>

            <Field>
              <Label htmlFor="file">Anexo (opcional)</Label>
              <Input id="file" name="file" type="file" onChange={handleChange} />
              <small>PDF, PNG, JPG — máximo 5MB</small>
            </Field>

            <Actions>
              <BtnPrimary type="submit" disabled={sending} aria-busy={sending}>
                <FaPaperPlane /> {sending ? "Enviando..." : "Enviar mensagem"}
              </BtnPrimary>

              <BtnGhost as="a" href="https://wa.me/5599999999999?text=Ol%C3%A1%20CliqZ%2C%20quero%20um%20or%C3%A7amento" target="_blank" rel="noreferrer">
                <FaWhatsapp /> Abrir no Whats
              </BtnGhost>
            </Actions>

            {success && <Success role="status">Mensagem enviada com sucesso — te respondemos em até 24h! 🚀</Success>}
          </Form>
        </Right>
      </Card>

      <FloatingWhats href="https://wa.me/5599999999999?text=Ol%C3%A1%20LK%20DIGITAL%2C%20quero%20um%20or%C3%A7amento" target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp">
        <FaWhatsapp />
      </FloatingWhats>
    </Page>
  );
}
