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
  & svg {
    margin-left: 0.5rem;
    fill: white;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.primary.buttonbasehover};
  }
  ${(props) =>
    props.outline &&
    css`
      background: ${({ theme }) => theme.colors.secondary.light};
      &:hover {
        background: ${({ theme }) => theme.colors.secondary.light2};
      }
      & svg {
        margin-right: 0.5rem;
      }
      &.ountlinetwo {
        color: ${({ theme }) => theme.colors.primary.darkblue};
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
