import styled from "styled-components";

export const LogoTitle = styled.a`
  font-size: ${({ theme }) => theme.sizeFont.lg1};
  color: ${({ theme }) => theme.colors.primary.white};
  font-weight: ${({ theme }) => theme.sizeWeight.md};
  &.logo-footer {
    color: ${({ theme }) => theme.colors.primary.headlines};
  }
`;
