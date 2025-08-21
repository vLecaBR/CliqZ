import { Wrap, Text } from './styles.js';

export default function Footer() {
  return (
    <Wrap>
      <Text>© {new Date().getFullYear()} LK DIGITAL. Todos os direitos reservados.</Text>
      <Text>Feito com 💜 em React.</Text>
    </Wrap>
  );
}
