import styled from "styled-components";

export const GridText = styled.div`
  display: grid;
  gap: 1.5rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
