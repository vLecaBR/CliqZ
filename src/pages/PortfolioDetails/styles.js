import styled, { css, keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(18px);}
  to { opacity: 1; transform: translateY(0);}
`;

export const Container = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 20px 120px;
  color: ${({ theme }) => theme?.colors?.text || "#0f1724"};
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 64px;

  h1 {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 16px;
    color: ${({ theme }) => theme?.colors?.primary || "#0b1220"};
  }

  p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme?.colors?.muted || "#4b5563"};
    max-width: 780px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

export const SectionCard = styled.section.withConfig({
  shouldForwardProp: (prop) => prop !== "visible",
})`
  margin-bottom: 30px;
  padding: 24px;
  border-radius: 16px;
  background: ${({ theme }) => theme?.colors?.card || "#fff"};
  border: 1px solid ${({ theme }) => theme?.colors?.border || "#e6e9ef"};
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  opacity: 0;
  transform: translateY(18px);

  ${({ visible }) =>
    visible &&
    css`
      animation: ${fadeUp} 0.7s forwards;
    `}

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 16px;
    color: ${({ theme }) => theme?.colors?.primary || "#0b1220"};
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

export const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;
  align-items: start;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`;

export const ColumnText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ColumnMedia = styled.div``;

export const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
`;

export const MediaItem = styled.div`
  border-radius: 16px;
  overflow: hidden;
  background: ${({ theme }) => theme?.colors?.card || "#fff"};
  border: 1px solid ${({ theme }) => theme?.colors?.border || "#e6e9ef"};
  transition: transform 0.22s ease, box-shadow 0.22s ease;

  &:hover { transform: translateY(-4px) scale(1.01); }

  img, video, iframe { width: 100%; height: auto; display: block; }
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 12px 0 0 0;
  font-size: 1rem;
  line-height: 1.8;

  li { margin-bottom: 8px; }
`;

export const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TechItem = styled.li`
  background: ${({ theme }) => theme?.colors?.card || "#fff"};
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme?.colors?.primary || "#0b1220"};
  border: 1px solid ${({ theme }) => theme?.colors?.border || "#e6e9ef"};
`;

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "size" && prop !== "visible",
})`
  display: inline-block;
  background: ${({ theme }) => theme?.colors?.primary || "#0b1220"};
  color: #fff;
  padding: ${({ size }) => (size === "lg" ? "12px 22px" : "10px 16px")};
  border-radius: 10px;
  border: none;
  font-weight: 700;
  cursor: pointer;
  font-size: ${({ size }) => (size === "lg" ? "1rem" : "0.95rem")};
  transition: transform 0.16s ease, background 0.16s ease;

  &:hover {
    transform: translateY(-3px);
    background: ${({ theme }) => theme?.colors?.accent || "#1f2937"};
  }
`;
