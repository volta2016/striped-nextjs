import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  padding: 6rem 0;
  flex-direction: rom;
  @media (max-width: 769px) {
    flex-direction: column;
  }
`;
