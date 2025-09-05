import styled, { keyframes, css } from "styled-components";

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px) scale(1.05); }
  100% { transform: translateY(0); }
`;

const fadeSlideIn = keyframes`
  0% { opacity: 0; transform: translateY(40px) scale(0.95);}
  100% { opacity: 1; transform: translateY(0) scale(1);}
`;

export const ServicesContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 120px;
  padding: 120px 20px;
  background: #0f0f1a;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
    background: ${({ theme }) => theme.colors.bg};
    z-index: 0;
    pointer-events: none;
  }
`;

export const ServicesHeader = styled.div`
  text-align: center;
  z-index: 1;

  h2 {
    font-size: 2.8rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    color: #aaa;
  }
`;

export const ServiceBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  gap: 70px;
  opacity: 0;
  z-index: 1;

  ${({ animate }) =>
    animate &&
    css`
      animation: ${fadeSlideIn} 1s forwards;
    `}

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ServiceSquare = styled.div`
  width: 380px;
  height: 380px;
  border-radius: 30px;
  background: linear-gradient(135deg, #4f00bc, #7c3aed, #3b82f6, #06b6d4);
  background-size: 200% 200%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(6px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: perspective(800px) rotateX(5deg) rotateY(-5deg) scale(1.03);
    box-shadow: 0 20px 50px rgba(124, 58, 237, 0.45);
  }
`;

export const ServiceIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 20px;
  animation: ${float} 4s ease-in-out infinite;
  filter: drop-shadow(0 0 8px rgba(124, 58, 237, 0.6));
`;

export const ServiceTitle = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 1px;
`;

export const ServiceContent = styled.div`
  max-width: 520px;
  background: rgba(20, 20, 20, 0.75);
  backdrop-filter: blur(12px);
  padding: 30px 35px;
  border-radius: 25px;
  color: #eaeaea;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px) scale(1.02);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
    text-align: center;
  }
`;

export const ServiceDesc = styled.p`
  font-size: 1.15rem;
  line-height: 1.7;
  margin-bottom: 20px;
  color: #ddd;
`;

export const ServiceImpact = styled.ul`
  font-size: 1rem;
  line-height: 1.6;
  margin-left: 20px;

  li {
    margin-bottom: 10px;
    color: #fff;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    padding-left: 0;
  }
`;

export const ChartWrapper = styled.div`
  margin-top: 25px;
  width: 100%;
  height: 200px;
  background: rgba(28, 28, 28, 0.8);
  border-radius: 20px;
  padding: 15px;
  border: 1px solid rgba(255, 255, 255, 0.08);
`;
