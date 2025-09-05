import styled from "styled-components";

export const Container = styled.section`
  max-width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;
  padding: 60px 20px;
  color: ${({ theme }) => theme.colors.text};

  h1 {
    font-size: 2.5rem;
    margin-bottom: 50px;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.layout.radius};
  overflow: hidden;
  backdrop-filter: blur(${({ theme }) => theme.layout.blur});
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: perspective(800px) rotateX(5deg) rotateY(-5deg) scale(1.03);
    box-shadow: 0 20px 40px ${({ theme }) => theme.colors.accent};
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

export const Content = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.accent};
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 10px 20px;
  border-radius: 999px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
  }
`;
