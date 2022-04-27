import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  padding: 1rem 1rem;
  z-index: 4;
  background: ${({ theme }) => theme.colors.secondary.stripegradient};
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;
  backdrop-filter: blur(0.05rem);
`;

export const NavGroup = styled.ul`
  display: flex;
  gap: 2.5rem;
  list-style: none;
  @media (max-width: 576px) {
    display: none;
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
`;

export const HeaderBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 500px;
  z-index: 0;
  background: ${({ theme }) => theme.colors.secondary.gradientback};
  clip-path: polygon(0 0, 100% 0, 100% 37%, 0 100%);
`;

export const BoxHero = styled.div`
  width: 620px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const BoxButton = styled.div`
  display: flex;
`;
