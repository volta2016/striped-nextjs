import styled from "styled-components";

export const ListFooter = styled.ul`
  font-size: ${({ theme }) => theme.sizeFont.sm};
  line-height: 34px;
  padding-bottom: 3.125rem;
  & li:first-child {
    font-weight: ${({ theme }) => theme.sizeWeight.md};
  }
`;

export const WrapList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 5.938rem 0;
`;
