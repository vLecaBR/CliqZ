import styled, { keyframes } from "styled-components";

// animações
const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0% { transform: translateY(0) rotate(0deg);}
  50% { transform: translateY(-20px) rotate(180deg);}
  100% { transform: translateY(0) rotate(360deg);}
`;

const moveLine = keyframes`
  0% { transform: translateX(-100%);}
  100% { transform: translateX(100%);}
`;

const moveParticle = keyframes`
  0% { transform: translateY(0);}
  50% { transform: translateY(-30px);}
  100% { transform: translateY(0);}
`;

// Container
export const Container = styled.section`
  position: relative;
  height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text};

  background: linear-gradient(-45deg, #7c3aed, #a855f7, #3b82f6, #06b6d4);
  background-size: 400% 400%;
  animation: ${gradientMove} 20s ease infinite;
`;

// Textos
export const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Subtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.3rem);
  max-width: 700px;
  margin: 0 auto 30px;
  color: ${({ theme }) => theme.colors.muted};
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

// shapes flutuantes
export const Shape = styled.div`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  animation: ${float} ${({ size }) => size / 50}s ease-in-out infinite alternate;
`;

// linhas finas
export const Line = styled.div`
  position: absolute;
  width: 200%;
  height: 2px;
  background: rgba(255,255,255,0.1);
  top: ${({ top }) => top};
  left: -100%;
  animation: ${moveLine} 8s linear ${({ delay }) => delay}s infinite;
`;

// partículas pequenas
export const Particle = styled.div`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  background: rgba(255,255,255,0.3);
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  animation: ${moveParticle} ${({ duration }) => duration}s ease-in-out infinite alternate;
`;
