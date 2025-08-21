import styled from 'styled-components';

export const Wrap = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 20px;
  text-align: center;
  background: rgba(15, 23, 42, 0.8);
`;

export const Text = styled.p`
  margin: 4px 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 14px;
`;
