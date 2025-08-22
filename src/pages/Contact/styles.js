import styled, { keyframes } from "styled-components";

// animação gradiente
const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// animação do input no focus
const glow = keyframes`
  0% { box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary}; }
  50% { box-shadow: 0 0 20px ${({ theme }) => theme.colors.accent}; }
  100% { box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary}; }
`;

export const Container = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  background: linear-gradient(-45deg, #4f00bc, #7c3aed, #3b82f6, #06b6d4);
  background-size: 400% 400%;
  animation: ${gradientMove} 20s ease infinite;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #fff;
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.5);
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
`;

export const Form = styled.form`
  flex: 1;
  min-width: 350px;
  background: ${({ theme }) => theme.colors.card};
  backdrop-filter: blur(${({ theme }) => theme.layout.blur});
  border-radius: ${({ theme }) => theme.layout.radius};
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  padding: 14px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  transition: 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    animation: ${glow} 1.5s infinite;
  }
`;

export const Textarea = styled.textarea`
  padding: 14px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  transition: 0.3s ease;
  resize: none;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    animation: ${glow} 1.5s infinite;
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 14px;
  border-radius: 999px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
  }
`;


export const InfoBox = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  color: #fff;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 1.2rem;
`;

export const IconWrapper = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
