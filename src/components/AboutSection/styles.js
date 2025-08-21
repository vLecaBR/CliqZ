import styled, { keyframes } from "styled-components";

// animação de flutuação
const float = keyframes`
  0% { transform: translateY(0) rotate(0deg);}
  50% { transform: translateY(-20px) rotate(180deg);}
  100% { transform: translateY(0) rotate(360deg);}
`;

export const Container = styled.section`
  width: 100%;
  min-height: 500px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 100px 20px;
  color: white;

  background: linear-gradient(270deg, #6a11cb, #2575fc, #6a11cb);
  background-size: 600% 600%;
  animation: gradientMove 20s ease infinite;

  @keyframes gradientMove {
    0% {background-position: 0% 50%;}
    50% {background-position: 100% 50%;}
    100% {background-position: 0% 50%;}
  }
`;

export const Wrapper = styled.div`
  max-width: 1000px;
  z-index: 2;
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

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
