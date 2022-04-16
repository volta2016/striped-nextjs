import React from "react";
import { NavGroup, NavItem } from "./styles";
import Link from "next/link";
import menuItems from "../constants";
const NavBar = () => {
  return (
    <NavGroup>
      {menuItems.map(({ path, name }, index) => (
        <NavItem id="topmenu" key={index}>
          <Link href={path}>{name}</Link>
        </NavItem>
      ))}
    </NavGroup>
  );
};

export default NavBar;
