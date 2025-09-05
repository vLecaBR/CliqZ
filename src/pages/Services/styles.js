// styles.js
import styled, { keyframes, css } from "styled-components";

const gradientMove = keyframes`
  0% { background-position:0% 50%; }
  50% { background-position:100% 50%; }
  100% { background-position:0% 50%; }
`;

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px) scale(1.05); }
  100% { transform: translateY(0); }
`;

const fadeSlideIn = keyframes`
  0% { opacity: 0; transform: translateY(40px) scale(0.95);}
  100% { opacity: 1; transform: translateY(0) scale(1);}
`;

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 100px 20px;
  background: ${({ theme }) => theme.colors.bg};
  width: 100%;
`;

export const ServiceBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  gap: 60px;
  opacity: 0;
  transition: all 0.8s ease;

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
  background-size: 400% 400%;
  animation: ${gradientMove} 12s ease infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 20px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.3);
  backdrop-filter: blur(8px);
`;

export const ServiceIcon = styled.div`
  font-size: 3.8rem;
  margin-bottom: 20px;
  animation: ${float} 4s ease-in-out infinite;
  filter: drop-shadow(0 0 12px rgba(124,58,237,0.6));
`;

export const ServiceTitle = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 1px;
`;

export const ServiceContent = styled.div`
  max-width: 520px;
  background: rgba(20,20,20,0.75);
  backdrop-filter: blur(12px);
  padding: 30px 35px;
  border-radius: 25px;
  color: #eaeaea;
  border: 1px solid rgba(255,255,255,0.05);
  box-shadow: 0 10px 30px rgba(0,0,0,0.25);

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
  border: 1px solid rgba(255,255,255,0.08);
`;
