import styled, { css, keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px);}
  to { opacity: 1; transform: translateY(0);}
`;

export const Container = styled.section`
  max-width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;
  padding: 50px 20px 100px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 15px;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.muted};
    max-width: 700px;
    margin: 0 auto;
  }
`;

export const Section = styled.section`
  margin-bottom: 80px;
  opacity: 0;
  transform: translateY(20px);

  ${({ visible }) =>
    visible &&
    css`
      animation: ${fadeUp} 0.8s forwards;
    `}

  h2 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
`;

export const MediaItem = styled.div`
  border-radius: ${({ theme }) => theme.layout.radius};
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  list-style: none;
  padding: 0;
`;

export const TechItem = styled.li`
  background: ${({ theme }) => theme.colors.card};
  padding: 10px 20px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 14px 28px;
  border-radius: 999px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;
  font-size: 1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    transform: scale(1.05);
  }
`;
