import styled from "styled-components";

export const LogoTitle = styled.a`
  font-size: ${({ theme }) => theme.sizeFont.lg1};
`;

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  padding: 1rem 1rem;
  z-index: 1;
  background: rgba(255, 255, 255, 0.01);
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;
  backdrop-filter: blur(0.63rem);
`;

export const NavGroup = styled.ul`
  display: flex;
  gap: 2.5rem;
  background-color: gray;
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
