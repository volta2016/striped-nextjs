import styled from "styled-components";

export const SectionGlobalScale = styled.section`
  background: url(/images/earth-background.png),
    ${({ theme }) => theme.colors.primary.darkblue};
  background-position: top right;
  background-repeat: no-repeat;
  padding-bottom: 4rem;
`;

export const BoxGlobal = styled.div`
  max-width: 528px;
  display: flex;
  flex-direction: column;
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2.75rem;
`;
