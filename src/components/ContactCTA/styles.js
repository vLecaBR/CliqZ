import styled from "styled-components";

export const Container = styled.section`
  padding: 80px 20px;
  text-align: center;
`;

export const Text = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

export const CTA = styled.a`
  display: inline-block;
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  padding: 14px 28px;
  border-radius: 9999px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;
