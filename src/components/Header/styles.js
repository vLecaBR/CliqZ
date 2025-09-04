// styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(${({ theme }) => theme.layout.blur});
  background: rgba(15, 23, 42, 0.6);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
`;

export const Logo = styled(Link)`
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 18px;

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(15, 23, 42, 0.9); /* mais visível */
    border-bottom-left-radius: ${({ theme }) => theme.layout.radius};
    border-bottom-right-radius: ${({ theme }) => theme.layout.radius};
    border: 1px solid ${({ theme }) => theme.colors.border};
    flex-direction: column;
    overflow: hidden;
    max-height: ${({ $open }) => ($open ? '300px' : '0')};
    transition: max-height 0.3s ease, padding 0.3s ease;
    gap: 12px;
    padding: ${({ $open }) => ($open ? '16px' : '0 16px')};
    box-shadow: 0 8px 16px rgba(0,0,0,0.3); /* leve destaque */
    backdrop-filter: blur(${({ theme }) => theme.layout.blur});
  }
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text}; /* texto mais forte */
  font-weight: 600;
  padding: 8px 0;
  width: 100%;
  text-align: center;
  border-radius: 6px;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary}22; /* só um toque da cor */
    color: ${({ theme }) => theme.colors.accent};
  }
`;


export const Burger = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    display: block;
  }
`;
