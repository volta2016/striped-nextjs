import styled from "styled-components";
import { WrapHeader } from "styles/InterfaceComponents";

export const ContainerHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  background: ${({ theme }) => theme.colors.secondary.trans};
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;
  backdrop-filter: blur(0.05rem);
  transition: all 0.9s ease;
  &.colorChange {
    background: ${({ theme }) => theme.colors.secondary.stripegradient};
    @media (min-width: 769px) {
      animation: 0.5s ease 0s normal 0.5 fadein;
      backdrop-filter: none;
      @keyframes fadein {
        from {
          opacity: 0.5;
        }
        to {
          opacity: 1;
        }
      }
    }
  }

  ${WrapHeader} {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    height: 70px;
    @media (max-width: 767px) {
      grid-template-columns: 1fr 50px;
      height: 70px;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px) {
    display: grid;
    place-content: center;
    align-items: center;
    gap: 1.5rem;
    height: 100vh;
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    right: 0;
    top: 0;
    transform: ${({ isOpen }) => (isOpen ? "scale(1)" : "scale(0)")};
    transition: ${({ isOpen }) =>
      isOpen ? "opacity 0.3s ease 0.4s" : "opacity 0.5s ease-out"};
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    width: 100%;
    & > a:first-child {
      display: none;
    }
  }
`;

export const NavGroup = styled.ul`
  display: flex;
  gap: 2.5rem;
  list-style: none;
  @media (max-width: 767px) {
    align-items: center;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem;
    width: 100%;
  }
`;

export const NavItem = styled.li`
  color: ${({ theme }) => theme.colors.primary.white};
  &#topmenu a:after {
    display: block;
    content: "";
    letter-spacing: 0.05rem;
    font-size: ${({ theme }) => theme.sizeFont.sm};
    transition: 0.25s ease-in-out;
    border-bottom: solid 3px ${({ theme }) => theme.colors.primary.darkblue};
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &#topmenu a:hover:after {
    transform: scaleX(1);
    color: ${({ theme }) => theme.colors.primary.darkblue};
  }
  &#topmenu.active a:after {
    transform: scaleX(1);
  }
  &#topmenu.active a,
  &#topmenu a:hover {
    color: ${({ theme }) => theme.colors.primary.darkblue};
    transition: color 0.3s ease;
  }
  &:first-child {
    display: none;
  }
  @media (max-width: 767px) {
    width: 100%;
    justify-content: center;
    &:first-child {
      display: inline-flex;
      justify-content: flex-end;
      position: absolute;
      right: 1rem;
      top: 1rem;
    }
    a {
      text-align: center;
      display: block;
      font-size: 1.2rem;
    }
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 500px;
  z-index: 0;
  background: ${({ theme }) => theme.colors.secondary.gradientback};
  clip-path: polygon(0 0, 100% 0, 100% 37%, 0 100%);
`;

export const MenuButton = styled.button`
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary.white};
  position: relative;
  @media (min-width: 768px) {
    display: none;
  }
  path {
    fill: inherit;
  }
`;

export const Overlay = styled.div`
  width: 24px;
  height: 24px;
  background: ${({ theme }) => theme.colors.secondary.stripegradient};
  border-radius: 50%;
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  transform-origin: center;
  transform: ${({ isOpen }) => (isOpen ? "scale(100)" : "scale(0)")};
  transition: transform 0.5s ease;
  @media (min-width: 768px) {
    display: none;
  }
`;
