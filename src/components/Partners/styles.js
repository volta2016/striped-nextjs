import styled from "styled-components";

export const GridBrands = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  row-gap: 5rem;
  padding: 8rem 0;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const CompanyLogo = styled.div`
  display: grid;
  width: 100%;
  place-items: center;
  @media (min-width: 768px) {
    &:nth-child(1),
    &:nth-child(5) {
      display: grid;
      width: 100%;
      place-items: self-start;
    }
    &:nth-child(4),
    &:nth-child(8) {
      display: grid;
      width: 100%;
      place-items: self-end;
    }
  }
`;
