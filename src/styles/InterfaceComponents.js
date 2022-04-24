import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: auto;
  max-width: 1112px;
  width: 100%;
  padding: 0 1rem;
  ${(props) =>
    props.justify &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0;
    `}
  ${(props) =>
    props.wrapper &&
    css`
      position: relative;
      z-index: 1;
    `}
  ${(props) =>
    props.gridbox &&
    css`
      display: grid;
      grid-template-columns: 620px 1fr;
      padding: 5rem 0;
      @media (min-width: 768px) {
        //grid-gap: 0 1rem;
        //grid-template-columns: repeat(2, 1fr);
      }
    `}
  @media (max-width: 992px) {
    max-width: 960px;
  }
  @media (max-width: 768px) {
    max-width: 720px;
  }
  @media (max-width: 576px) {
    max-width: 540px;
  }
`;

export const ContainerFull = styled.div`
  width: 100%;
  display: grid;
  place-content: end;
`;
