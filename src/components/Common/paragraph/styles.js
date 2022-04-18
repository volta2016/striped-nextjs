import styled, { css } from "styled-components";

export const ParagraphContainer = styled.p`
  color: ${({ theme }) => theme.colors.primary.subtitles};
  line-height: 34px;
  margin: 0;
  ${(props) =>
    props.bold &&
    css`
      color: ${({ theme }) => theme.colors.secondary.secondarybutton};
      & span {
        font-size: ${({ theme }) => theme.colors.primary.purple};
        font-weight: ${({ theme }) => theme.sizeWeight.md};
      }
    `}
`;
