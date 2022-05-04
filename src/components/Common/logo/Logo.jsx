import { LogoTitle } from "./styles";
import Link from "next/link";

const Logo = ({ href, name, className }) => (
  <Link href={href} passHref>
    <LogoTitle className={className}>{name}</LogoTitle>
  </Link>
);

export default Logo;
