import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bar, Logo, Nav, NavLink, Burger } from './styles.js';
import { FiMenu, FiX } from 'react-icons/fi';

const links = [
  { to: '/', label: 'Início' },
  { to: '/services', label: 'Serviços' },
  { to: '/portfolio', label: 'Portfólio' },
  { to: '/contact', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Bar>
      <Logo to="/">LK DIGITAL</Logo>
      <Nav $open={open}>
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>
            {l.label}
          </NavLink>
        ))}
      </Nav>
      <Burger onClick={() => setOpen(!open)}>
        {open ? <FiX size={22} /> : <FiMenu size={22} />}
      </Burger>
    </Bar>
  );
}
