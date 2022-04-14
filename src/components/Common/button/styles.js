import styled, { css } from "styled-components";

export const ButtonBase = styled.a`
  cursor: pointer;
  padding: 1rem 1rem;
  color: ${({ theme }) => theme.colors.primary.white};
  border-radius: 90px;
  background: ${({ theme }) => theme.colors.primary.button};
  font-size: ${({ theme }) => theme.sizeFont.sm};
  transition: 0.3s;
  display: flex;
  align-items: center;
  &:hover {
    background: ${({ theme }) => theme.colors.primary.buttonbasehover};
  }
  ${(props) => {
    props.outline &&
      css`
        background: ${({ theme }) => theme.colors.primary.trans};
        &:hover {
          background: ${({ theme }) => theme.colors.secondary.light};
        }
        & svg {
          margin-right: 0.5rem;
        }
      `;
  }}
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
