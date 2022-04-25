import { Wrapper } from "./styles";
import { TitleHthree } from "components/Common/title/styles";
import { Container } from "styles/InterfaceComponents";
import Paragraph from "components/Common/paragraph";
import UrlButtons from "../constants/urlButtons";
import Button from "components/Common/button";
import Arrow from "components/icons/Arrow";

const ReadyToGetStarted = () => {
  return (
    <section>
      <Container>
        <Wrapper>
          <div>
            <TitleHthree>Ready to get started?</TitleHthree>
            <Paragraph>
              Explore <span>Striped Payments,</span> or create an account
              instantly and start accepting payments. You can also contact us to
              design a custom package for your business.
            </Paragraph>
            <Button
              link={UrlButtons.Github}
              tipo="link"
              role="link"
              target="_blank"
              rel="noreferrer"
              backcolor="purple"
            >
              Star with paymets <Arrow />
            </Button>
          </div>
        </Wrapper>
      </Container>
    </section>
  );
};

export default ReadyToGetStarted;
