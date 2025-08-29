// styles.js
import styled from "styled-components";

export const Container = styled.section`
  padding: 80px 20px;
  max-width: 1800px;
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 60px;
  color: ${({ theme }) => theme.colors.text};
  position: relative;

  &::after {
    content: "";
    width: 60px;
    height: 4px;
    background: ${({ theme }) => theme.colors.accent};
    display: block;
    margin: 15px auto 0;
    border-radius: 2px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 35px;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.layout.radius};
  padding: 35px 25px;
  transition: all 0.3s ease;
  cursor: default;
  text-align: left;

  &:hover {
    transform: translateY(-8px);
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  }
`;

export const Icon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 18px;
`;

export const CardTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const Desc = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 15px;
`;

export const Stats = styled.p`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  margin-top: 10px;
`;
