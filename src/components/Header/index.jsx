import { WrapHeader } from "styles/InterfaceComponents";
import { ContainerHeader, MenuButton, Nav, Overlay } from "./styles";
import { AiOutlineMenu } from "react-icons/ai";
//import { useRef } from "react";
//import { motion, useCycle } from "framer-motion";

import Button from "../Common/button";
import NavBar from "./NavBar";
import Logo from "components/Common/logo/Logo";
import useToggle from "hooks/useToggle";
//import MenuToggle from "./MenuToggle";
//import useDimensions from "hooks/useDimension";

//import Arrow from "../icons/Arrow";

const Header = () => {
  const { open, handleOpen, handleClose } = useToggle();
  return (
    <ContainerHeader>
      <WrapHeader>
        <Logo className="logomb" href="/" name="Striped" />
        <MenuButton onClick={handleOpen}>
          <AiOutlineMenu size="2.3rem" />
          <Overlay isOpen={open} />
        </MenuButton>
        <Nav isOpen={open}>
          <Logo href="/" name="Striped" />

          <NavBar handleClose={handleClose} />
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
        </Nav>
      </WrapHeader>
    </ContainerHeader>
  );
};

export default Header;
