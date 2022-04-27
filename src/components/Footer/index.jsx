import { Container } from "styles/InterfaceComponents";
import { WrapList } from "./styles";
import UrlButtons from "../constants/urlButtons";
import Logo from "components/Common/logo/Logo";
import DevelopersAndCompany from "./DevelopersAndCompany";
import Products from "./Products";
import UseCasesAndResources from "./UseCasesAndResources";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <Container>
        <WrapList>
          <Logo className="logo-footer" href="/#" name="Striped"></Logo>
          <Products />
          <DevelopersAndCompany />
          <UseCasesAndResources />
        </WrapList>
        <Link href={UrlButtons.Github}>
          <a className="copyright">Hecho con ❤️ by @volta2016</a>
        </Link>
      </Container>
    </footer>
  );
};

export default Footer;
