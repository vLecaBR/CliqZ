import styled from "styled-components";

export const Container = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 50px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

export const Card = styled.div`
  border-radius: ${({ theme }) => theme.layout.radius};
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Img = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
`;
