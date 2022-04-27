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
      padding: 0 1rem;
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
      padding: 5rem 1rem;
      @media (max-width: 768px) {
        grid-gap: 2rem 0;
        grid-template: 1fr 532px / 1fr;
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
  padding-left: 1rem;
`;

export const CardContent = styled.article`
  display: flex;
  flex-direction: column;
`;
