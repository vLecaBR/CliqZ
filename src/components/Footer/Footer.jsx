import { Wrap, Text, Text1 } from './styles.js';

export default function Footer() {
  return (
    <Wrap>
      <Text>© {new Date().getFullYear()} CliqZ. Todos os direitos reservados.</Text>
      <Text1>Criado por Victor Leça</Text1>
    </Wrap>
  );
}
