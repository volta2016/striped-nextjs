import styled from "styled-components";

export const SectionDesignedForDevelopers = styled.section`
  background: ${({ theme }) => theme.colors.primary.darkblue};
`;

export const WrapBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
  gap: 1.5rem;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;


