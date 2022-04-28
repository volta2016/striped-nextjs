import Paragraph from "components/Common/paragraph";
import TitleH2 from "components/Common/title/TitleH2";
import DateStadistics from "./DateStadistics";
import { Container } from "styles/InterfaceComponents";
import { SectionGlobalScale, BoxGlobal, CardContainer } from "./styles";

const GlobalScale = () => {
  return (
    <SectionGlobalScale id="Company">
      <Container>
        <BoxGlobal>
          <Paragraph bold="cian">Global scale</Paragraph>
          <TitleH2>The backbone for internet business</TitleH2>
          <Paragraph colorfont="white">
            For ambitious companies around the world, Stripe makes moving money
            as simple, borderless, and programmable as the rest of the internet.
            Our teams are based in dozens of offices around the world and we
            process hundreds of billions of dollars each year for{" "}
            <span className="globalscale"> startups to large enterprises.</span>
          </Paragraph>
        </BoxGlobal>
        <CardContainer>
          <DateStadistics />
        </CardContainer>
      </Container>
    </SectionGlobalScale>
  );
};

export default GlobalScale;
