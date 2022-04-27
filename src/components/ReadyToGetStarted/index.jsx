import { Wrapper } from "./styles";
import { TitleHthree } from "components/Common/title/styles";
import { Container } from "styles/InterfaceComponents";
import Paragraph from "components/Common/paragraph";
import UrlButtons from "../constants/urlButtons";
import Button from "components/Common/button";
import Arrow from "components/icons/Arrow";
import CardTwo from "components/Common/card/CardTwo";

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
            <Button
              link={UrlButtons.Github}
              tipo="link"
              role="link"
              target="_blank"
              rel="noreferrer"
              outline="purple"
              className="outlinecard ready"
            >
              See libraries
              <Arrow className="outlinecard" />
            </Button>
          </div>
          <CardTwo
            src="/images/always-know-what-you-pay.png"
            subtitle="Always know what you pay"
            text="Integrated per-transaction pricing with no hidden fees."
            className="icon"
          />
          <CardTwo
            src="/images/start-your-integration.png"
            subtitle="Start your integration"
            text="Get up and running with Stripe in as little as 10 minutes."
            className="icon"
          />
        </Wrapper>
      </Container>
      <div className="dividerThree"></div>
    </section>
  );
};

export default ReadyToGetStarted;
