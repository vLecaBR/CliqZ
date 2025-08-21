import styled, { keyframes } from "styled-components";

// animação de formas girando/flutuando
const float = keyframes`
  0% { transform: translateY(0) rotate(0deg);}
  50% { transform: translateY(-10px) rotate(180deg);}
  100% { transform: translateY(0) rotate(360deg);}
`;

export const Container = styled.section`
  padding: 80px 20px;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  text-align: center;
  color: white;
  background: linear-gradient(270deg, #6a11cb, #2575fc, #6a11cb);
  background-size: 600% 600%;
  animation: gradientMove 15s ease infinite;

  @keyframes gradientMove {
    0% {background-position: 0% 50%;}
    50% {background-position: 100% 50%;}
    100% {background-position: 0% 50%;}
  }
`;


export const Wrapper = styled.div`
  text-align: center;
  position: relative;
  z-index: 2;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.6;
`;

export const Shapes = styled.div`
  position: absolute;
  top: -50px;
  left: -50px;
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  border-radius: 50%;
  opacity: 0.3;
  animation: ${float} 10s linear infinite;

  &:after {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    top: 50px;
    left: 50px;
    background: linear-gradient(45deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.primary});
    border-radius: 50%;
    opacity: 0.2;
    animation: ${float} 12s linear infinite reverse;
  }
`;
