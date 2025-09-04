import { Wrap, Text, Text1 } from './styles.js';

export default function Footer() {
  return (
    <Wrap>
      <Text>© {new Date().getFullYear()} <Text1>CliqZ.</Text1> Todos os direitos reservados.</Text>
    </Wrap>
  );
}
