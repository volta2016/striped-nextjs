import React from "react";
import { BoxOne } from "./styles";
import { Container } from "styles/InterfaceComponents";
import Paragraph from "components/Common/paragraph";
import TitleH2 from "components/Common/title/TitleH2";
import FourCard from "./FourCard";

const DesignedForDevelopersWhite = () => {
  return (
    <section>
      <Container>
        <BoxOne>
          <Paragraph bold="purple">Designed for developers</Paragraph>
          <TitleH2 colortitle="headlines">
            The world’s most powerful and easy-to-use APIs
          </TitleH2>
          <Paragraph>
            We agonize over the right abstractions so your teams don’t need to
            stitch together disparate systems or spend months integrating
            payments functionality.
          </Paragraph>
        </BoxOne>
        <FourCard />
      </Container>
      <div className="dividerOne"></div>
    </section>
  );
};

export default DesignedForDevelopersWhite;
