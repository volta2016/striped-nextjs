import styled from "styled-components";

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 500px;
  z-index: 0;
  background: ${({ theme }) => theme.colors.secondary.gradientback};
  clip-path: polygon(0 0, 100% 0, 100% 37%, 0 100%);
`;

export const BoxHero = styled.div`
  width: 620px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media (max-width: 638px) {
    width: 100%;
  }
`;

export const BoxButton = styled.div`
  display: flex;
`;
