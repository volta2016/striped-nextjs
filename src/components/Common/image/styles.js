import styled, { css, keyframes } from "styled-components";

const bounceAnimation = keyframes`
 0% { transform: translateY(0); }
 50% { transform: translateY(-20px); }
 100% { transform: translateY(0); }
`;

export const HeroImage = styled.img`
  display: none;
  position: absolute;
  top: 115px;
  right: 0;
  width: 600px;
  z-index: 3;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-name: ${bounceAnimation};
  animation-timing-function: linear;
  @media (min-width: 1280px) {
    display: block;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
  &.image {
    @media (max-width: 576px) {
      max-width: 100px;
    }
  }
  &.icon {
    width: 80px;
  }
`;
