import styled from "styled-components";

export const LogoTitle = styled.a`
  font-size: ${({ theme }) => theme.sizeFont.lg1};
  color: ${({ theme }) => theme.colors.primary.white};
  font-weight: ${({ theme }) => theme.sizeWeight.md};
`;

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  padding: 1rem 1rem;
  z-index: 2;
  background: rgba(255, 255, 255, 0.01);
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;
  backdrop-filter: blur(0.05rem);
`;

export const NavGroup = styled.ul`
  display: flex;
  gap: 2.5rem;
  list-style: none;
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
`;
