import styled from "styled-components";

export const HeroImage = styled.img`
  display: none;
  position: absolute;
  top: 20%;
  right: 0;
  width: 600px;
  z-index: 3;
  @media (min-width: 1280px) {
    display: block;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
  &.image {
    width: auto;
  }
`;
