import styled, { css } from "styled-components";

export const ButtonBase = styled.a`
  cursor: pointer;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.primary.white};
  background: ${({ theme }) => theme.colors.primary.primarybuttons};
  border-radius: 90px;
  font-size: ${({ theme }) => theme.sizeFont.sm};
  transition: 0.3s;
  display: inline-block;
  align-items: center;
  width: auto;
  height: 40px;
  @media (max-width: 576px) {
    padding: 0.5rem 0.8rem;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.secondary.secondarybuttons};
  }
  & svg {
    margin-left: 0.5rem;
    fill: white;
  }

  ${(props) =>
    props.outline &&
    css`
      background: ${({ theme }) => theme.colors.secondary.light};
      &:hover {
        background: ${({ theme }) => theme.colors.secondary.light2};
      }
      & svg {
        margin-left: 0.5rem;
        fill: white;
      }
      &.ountlinetwo {
        color: ${({ theme }) => theme.colors.primary.darkblue};
        margin-left: 2rem;
        @media (max-width: 576px) {
          margin-left: 1rem;
        }
        & svg.ountlinetwo {
          margin-left: 0.5rem;
          fill: #19385e;
        }
      }
      &.outlinecard {
        color: ${({ outline }) => (outline === "cian" ? "#01D4FF" : "#635CFF")};
        background: ${({ theme }) => theme.colors.secondary.trans};
        & svg.outlinecard {
          margin-left: 0.5rem;
          fill: ${({ outline }) =>
            outline === "cian" ? "#01D4FF" : "#635CFF"};
        }
        &.ready {
          margin-left: 1.25rem;
        }
      }
    `}

  ${(props) =>
    props.backcolor &&
    css`
      margin-top: 2rem;
      color: ${({ backcolor }) =>
        backcolor === "purple" ? "#ffffff" : "#092540"};
      background: ${({ backcolor }) =>
        backcolor === "purple" ? "#635CFF" : "#01D4FF"};
      &:hover {
        background: ${({ theme }) => theme.colors.secondary.secondaryback};
      }
      & svg {
        margin-left: 0.5rem;
        fill: ${({ backcolor }) =>
          backcolor === "purple" ? "#ffffff" : "#092540"};
      }
    `}
`;

export const ButtonForm = styled.a`
  cursor: pointer;
  padding: 1rem 1rem;
  color: ${({ theme }) => theme.colors.primary.white};
  border-radius: 90px;
  background: ${({ theme }) => theme.colors.secondary.light};
  font-size: ${({ theme }) => theme.sizeFont.sm};
  transition: 0.3s;
  display: flex;
  align-items: center;
  &:hover {
    color: ${({ theme }) => theme.colors.primary.darkblue};
  }
  & svg {
    margin-right: 0.5rem;
  }
`;
