import styled from "styled-components";

export const Container = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.layout.radius};
  padding: 30px 20px;
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  }
`;

export const Icon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 15px;
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: 600;
`;

export const Desc = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.muted};
`;
