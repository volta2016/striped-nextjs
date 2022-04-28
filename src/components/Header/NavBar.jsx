import React from "react";
import { NavGroup, NavItem } from "./styles";
import Link from "next/link";
import menuItems from "../constants";
import useCurrentLink from "hooks/useCurrentLink";

const NavBar = () => {
  useCurrentLink();

  return (
    <NavGroup>
      {menuItems.map(({ path, name }, index) => (
        <NavItem id="topmenu" className={name} key={index}>
          <Link href={path}>{name}</Link>
        </NavItem>
      ))}
    </NavGroup>
  );
};

export default NavBar;
