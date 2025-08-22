import styled, { keyframes } from "styled-components";

const floatSoft = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`;

const glowIn = keyframes`
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
`;

export const Page = styled.main`
  min-height: calc(100dvh - 120px);
  padding: 60px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.bg}; /* background original */
  color: ${({ theme }) => theme.colors.text};
`;

/* Card principal */
export const Card = styled.section`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;
  background: rgba(255,255,255,0.02);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 18px;
  padding: 28px;
  box-shadow: 0 10px 40px rgba(2,6,23,0.6);
  backdrop-filter: blur(${({ theme }) => theme.layout.blur});
  position: relative;

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

/* Left - intro + contact info */
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 8px 12px;
`;

/* Right - form */
export const Right = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 8px 12px;
`;

/* Texts */
export const Title = styled.h1`
  font-size: clamp(1.6rem, 3.4vw, 2.4rem);
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.02em;
  animation: ${glowIn} 0.6s ease both;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  margin: 0;
  font-size: 1rem;
`;

/* small info lines */
export const Info = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 12px;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;

  a { color: ${({ theme }) => theme.colors.primary}; text-decoration: underline; }
`;

/* Form */
export const Form = styled.form`
  width: 100%;
  max-width: 560px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  animation: ${glowIn} 0.6s ease 0.12s both;
`;

/* Fields */
export const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.95rem;

  small { color: ${({ theme }) => theme.colors.muted}; }
  span.error { color: #ff6b6b; font-weight: 600; }
`;

export const Label = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.muted};
`;

const baseInput = `
  width: 100%;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.06);
  background: rgba(0,0,0,0.25);
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  transition: box-shadow .18s ease, transform .12s ease, border-color .12s ease;
  &:focus {
    box-shadow: 0 6px 20px rgba(124,58,237,0.12);
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
  }
`;

export const Input = styled.input`
  ${baseInput}
  &[type="file"] {
    background: transparent;
    padding: 8px 10px;
  }
`;

export const Textarea = styled.textarea`
  ${baseInput}
  resize: vertical;
  min-height: 140px;
`;

/* layout helpers */
export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

/* Actions */
export const Actions = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 8px;
`;

/* Buttons */
export const BtnPrimary = styled.button`
  display: inline-flex;
  gap: 10px;
  align-items: center;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
  color: #0b0b0b;
  padding: 12px 18px;
  border-radius: 12px;
  border: none;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 8px 30px rgba(124,58,237,0.14);
  transition: transform .12s ease, filter .12s ease;
  &:hover { transform: translateY(-3px); filter: brightness(1.03); }
  &:disabled { opacity: .7; cursor: not-allowed; transform: none; }
`;

/* ghost button (link) */
export const BtnGhost = styled.a`
  display: inline-flex;
  gap: 10px;
  align-items: center;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.04);
  text-decoration: none;
  transition: transform .12s ease, background .12s ease;
  &:hover { transform: translateY(-3px); background: rgba(255,255,255,0.02); }
`;

/* success message */
export const Success = styled.div`
  margin-top: 12px;
  padding: 12px 14px;
  border-radius: 10px;
  background: linear-gradient(90deg, rgba(34,197,94,0.12), rgba(34,197,94,0.08));
  color: #b7f0c6;
  font-weight: 700;
  box-shadow: 0 8px 20px rgba(14,16,18,0.5);
`;

/* floating Whats button */
export const FloatingWhats = styled.a`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #25d366, #1ebe57);
  color: #061018;
  box-shadow: 0 10px 30px rgba(2,6,23,0.6);
  z-index: 999;
  transition: transform .12s ease;
  &:hover { transform: scale(1.06); }
`;

/* reveal wrapper */
export const Reveal = styled.div`
  animation: ${glowIn} 0.6s ease both;
`;
