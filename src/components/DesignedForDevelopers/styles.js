import styled from "styled-components";

export const SectionDesignedForDevelopers = styled.section`
  background: ${({ theme }) => theme.colors.primary.darkblue};
`;

export const WrapBox = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const CardContent = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
