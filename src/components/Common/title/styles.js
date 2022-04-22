import styled from "styled-components";

export const TitleHone = styled.h1`
  color: ${({ theme }) => theme.colors.primary.headlines};
  font-size: ${({ theme }) => theme.sizeFont.xxl};
  line-height: 109px;
  margin: 7.7rem 0 0 0;
`;

export const TitleHtwo = styled.h2`
  color: ${({ colortitle }) =>
    colortitle === "headlines" ? "#393939" : "#ffffff"};
  font-size: ${({ theme }) => theme.sizeFont.lg2};
  max-width: ${({ variant }) => (variant === "col-6" ? "50%" : "100%")};
  line-height: 54px;
`;

export const TitleHthree = styled.h3`
  color: ${({ theme }) => theme.colors.primary.headlines};
  font-size: ${({ theme }) => theme.sizeFont.lg2};
`;

export const TitleHthreeSub = styled.h3`
  color: ${({ colortitle }) =>
    colortitle === "white" ? "#ffffff" : "#11253e"};
  border-left: ${({ colortitle }) =>
    colortitle === "white" ? "2px solid #01D4FF" : "2px 0 0 0 solid #635CFF"};
  padding-left: 1rem;
`;
