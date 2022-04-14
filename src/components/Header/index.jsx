import Logo from "./Logo";
import { Container } from "styles/InterfaceComponents";
import { Nav, HeaderBg } from "./styles";
import Button from "../Common/button";
import NavBar from "./NavBar";
//import Arrow from "../icons/Arrow";

const Header = () => {
  return (
    <header>
      <Nav>
        <Container justify>
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
    </header>
  );
};

export default Header;
