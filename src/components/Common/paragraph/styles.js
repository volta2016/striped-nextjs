import styled, { css } from "styled-components";

export const ParagraphContainer = styled.p`
  color: ${({ colorfont }) => (colorfont === "white" ? "#ffffff" : "#393939")};
  line-height: 34px;
  margin: 0;
  overflow-wrap: break-word;
  &.card {
    margin-left: 1rem;
    line-height: 24px;
  }

  & span {
    color: ${({ theme }) => theme.colors.primary.purple};
    font-weight: ${({ theme }) => theme.sizeWeight.md};
  }
  & span.globalscale {
    color: ${({ theme }) => theme.colors.primary.cian};
    font-weight: ${({ theme }) => theme.sizeWeight.md};
  }
  ${(props) =>
    props.bold &&
    css`
      color: ${({ bold }) => (bold === "purple" ? "#635CFF" : "#01D4FF")};
      font-weight: ${({ theme }) => theme.sizeWeight.lg};
    `}
  ${(props) =>
    props.lineheight &&
    css`
      line-height: 24px;
      padding-left: 1rem;
    `}
`;

//colorfont;
