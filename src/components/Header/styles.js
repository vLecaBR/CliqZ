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
    position: fixed;
    top: 64px;
    right: 16px;
    left: 16px;
    background: ${({ theme }) => theme.colors.card};
    backdrop-filter: blur(${({ theme }) => theme.layout.blur});
    border-radius: ${({ theme }) => theme.layout.radius};
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 20px;
    flex-direction: column;
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
  }
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.muted};
  font-weight: 600;
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Burger = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: ${({ theme }) => theme.bp.md}) {
    display: block;
  }
`;
