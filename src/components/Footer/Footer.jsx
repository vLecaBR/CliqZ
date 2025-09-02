import { Wrap, Text } from './styles.js';

export default function Footer() {
  return (
    <Wrap>
      <Text>© {new Date().getFullYear()} CliqZ. Todos os direitos reservados.</Text>
      <Text>Criado por Victor Leça</Text>
    </Wrap>
  );
}
