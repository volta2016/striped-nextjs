import styled, { css } from "styled-components";

export const ParagraphContainer = styled.p`
  color: ${({ theme }) => theme.colors.primary.subtitles};
  line-height: 34px;
  margin: 0;
  overflow-wrap: break-word;
  line-height: 34px;
  & span {
    color: ${({ theme }) => theme.colors.primary.purple};
    font-weight: ${({ theme }) => theme.sizeWeight.md};
  }
  ${(props) =>
    props.bold &&
    css`
      color: ${({ theme }) => theme.colors.primary.purple};
      font-weight: ${({ theme }) => theme.sizeWeight.lg};
    `}
`;
