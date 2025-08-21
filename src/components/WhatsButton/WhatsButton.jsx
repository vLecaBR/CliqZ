import { Fab } from './styles.js';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsButton() {
  return (
    <Fab
      href="https://wa.me/5599999999999?text=Oi%20LK%20DIGITAL%20quero%20um%20orçamento!"
      target="_blank"
      rel="noreferrer"
    >
      <FaWhatsapp size={28} />
    </Fab>
  );
}
