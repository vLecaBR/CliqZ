import styled, { keyframes } from "styled-components";

// animação suave de gradiente
const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const Container = styled.section`
  position: relative;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  overflow: hidden;
`;

export const BgAnim = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(-45deg, #7c3aed, #a855f7, #3b82f6, #06b6d4);
  background-size: 400% 400%;
  animation: ${gradientMove} 15s ease infinite;
  z-index: -1;
  opacity: 0.5;
  filter: blur(120px);
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.2;
  margin-bottom: 20px;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Subtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: ${({ theme }) => theme.colors.muted};
  max-width: 700px;
  margin: 0 auto 30px;
`;

export const CTA = styled.a`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 14px 28px;
  border-radius: 9999px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;
