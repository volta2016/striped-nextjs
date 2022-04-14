import styled, { css } from "styled-components";

export const ButtonBase = styled.a`
  cursor: pointer;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.primary.white};
  border-radius: 90px;
  background: ${({ theme }) => theme.colors.secondary.secondarybuttons};
  font-size: ${({ theme }) => theme.sizeFont.sm};
  transition: 0.3s;
  display: flex;
  align-items: center;
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
