import Logo from "./Logo";
import { Container } from "styles/InterfaceComponents";
import { Nav, HeaderBg } from "./styles";
import Button from "../Common/button";
import NavBar from "./NavBar";
import Box from "./Box";

import NextImage from "components/Common/image";
//import Arrow from "../icons/Arrow";

const Header = () => {
  return (
    <header>
      <Nav>
        <Container justify={true}>
          <Logo href="/#" name="Striped" />
          <NavBar />
          <Button
            link="/"
            tipo="link"
            role="link"
            target="_blank"
            rel="noreferrer"
            outline="true"
          >
            Sign in
          </Button>
        </Container>
      </Nav>
      <HeaderBg />
      <Container wrapper={true}>
        <Box />
        <NextImage
          src="/payment-hero.png"
          alt="Payments 
              infrastructure 
              for the internet"
          width={600}
          height={700}
        />
      </Container>
    </header>
  );
};

export default Header;
