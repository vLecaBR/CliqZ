import styled, { keyframes, css } from "styled-components";

const gradientMove = keyframes`
  0% { background-position:0% 50%; }
  50% { background-position:100% 50%; }
  100% { background-position:0% 50%; }
`;

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const fadeSlideIn = keyframes`
  0% { opacity: 0; transform: translateX(-50px);}
  100% { opacity: 1; transform: translateX(0);}
`;

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding: 60px 20px;
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
`;

export const ServiceBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  gap: 40px;
  opacity: 0;
  transform: translateX(${({ reverse }) => (reverse ? "50px" : "-50px")});
  transition: all 0.8s ease;

  ${({ animate }) =>
    animate &&
    css`
      animation: ${fadeSlideIn} 0.8s forwards;
    `}

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    transform: translateX(0);
  }
`;

export const ServiceSquare = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 20px;
  background: linear-gradient(135deg, #4f00bc, #7c3aed, #3b82f6, #06b6d4);
  background-size: 400% 400%;
  animation: ${gradientMove} 15s ease infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 20px;
`;

export const ServiceIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 20px;
  animation: ${float} 3s ease-in-out infinite alternate;
`;

export const ServiceTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
`;

export const ServiceContent = styled.div`
  max-width: 500px;
  background: #111111aa; /* extensão do card com leve transparência */
  padding: 20px 30px;
  border-radius: 20px;
  color: #ffffffcc;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
    text-align: center;
  }
`;

export const ServiceDesc = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 15px;
`;

export const ServiceImpact = styled.ul`
  font-size: 1rem;
  line-height: 1.5;
  list-style: disc;
  margin-left: 20px;

  li {
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    padding-left: 0;
  }
`;
