import { MenuButton, NavGroup, NavItem } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

import useCurrentLink from "hooks/useCurrentLink";

const NavBar = ({ handleClose }) => {
  useCurrentLink();

  return (
    <NavGroup>
      <NavItem>
        <MenuButton onClick={handleClose} ariaLabel="Botón de cerrar">
          <AiOutlineClose size="2.3rem" />
        </MenuButton>
      </NavItem>
      <NavItem id="topmenu" className="Products" onClick={handleClose}>
        <Link href="#Products">Products</Link>
      </NavItem>
      <NavItem id="topmenu" className="Developers" onClick={handleClose}>
        <Link href="#Developers">Developers</Link>
      </NavItem>
      <NavItem id="topmenu" className="Company" onClick={handleClose}>
        <Link href="#Company">Company</Link>
      </NavItem>
      <NavItem id="topmenu" className="Pricing" onClick={handleClose}>
        <Link href="#Pricing">Pricing</Link>
      </NavItem>
    </NavGroup>
  );
};

export default NavBar;
