import styled from "styled-components";

export const Container = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 40px;
`;

export const ImageWrapper = styled.div`
  flex: 1 1 300px;
  img {
    width: 100%;
    border-radius: ${({ theme }) => theme.layout.radius};
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.6;
`;
