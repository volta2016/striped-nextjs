import styled from "styled-components";

export const TitleHone = styled.h1`
  color: ${({ theme }) => theme.colors.primary.headlines};
  font-size: ${({ theme }) => theme.sizeFont.xxl};
  line-height: 109px;
  margin: 7.7rem 0 0 0;
`;

export const TitleHtwo = styled.h2`
  color: ${({ theme }) => theme.colors.primary.headlines};
  font-size: ${({ theme }) => theme.sizeFont.lg2};
`;

export const TitleHthree = styled.h3`
  color: ${({ theme }) => theme.colors.primary.headlines};
  font-size: ${({ theme }) => theme.sizeFont.lg2};
`;