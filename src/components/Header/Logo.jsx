import React from "react";
import { LogoTitle } from "./styles";
import Link from "next/link";

const Logo = ({ href, name }) => (
  <Link href={href} passHref>
    <LogoTitle>{name}</LogoTitle>
  </Link>
);

export default Logo;
