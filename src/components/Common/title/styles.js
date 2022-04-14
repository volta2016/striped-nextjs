import styled from "styled-components";

export const TitleH1Home = styled.h1`
  color: ${({ theme }) => theme.colors.primary.headlines};
  font-size: ${({ theme }) => theme.sizeFont.primary.xxl};
  line-height: 109px;
`;

export const TitleHtwo = styled.h2`
  color: ${({ theme }) => theme.colors.primary.headlines};
  font-size: ${({ theme }) => theme.sizeFont.primary.lg2};
`;

export const TitleHthree = styled.h3`
  color: ${({ theme }) => theme.colors.primary.headlines};
  font-size: ${({ theme }) => theme.sizeFont.primary.lg2};
`;
