import styled from 'styled-components';

export const Fab = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #25d366;
  color: white;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  z-index: 100;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;
