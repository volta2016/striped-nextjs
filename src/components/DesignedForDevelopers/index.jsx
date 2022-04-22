import React from "react";
import { SectionDesignedForDevelopers, WrapBox } from "./styles";
import { Container } from "../../styles/InterfaceComponents";
import UrlButtons from "../constants/urlButtons";
import Paragraph from "../Common/paragraph";
import TitleH2 from "../Common/title/TitleH2";
import Button from "components/Common/button";
import Arrow from "components/icons/Arrow";
import Image from "next/image";

const DesignedForDevelopers = () => (
  <>
    <SectionDesignedForDevelopers>
      <Container gridbox={true}>
        <div>
          <Paragraph bold="cian">Designed for developers</Paragraph>
          <TitleH2>The world’s most powerful and easy-to-use APIs</TitleH2>
          <Paragraph colorfont="white">
            We agonize over the right abstractions so your teams don’t need to
            stitch together disparate systems or spend months integrating
            payments functionality.
          </Paragraph>
          <Button
            link={UrlButtons.Github}
            tipo="link"
            role="link"
            target="_blank"
            rel="noreferrer"
            backcolor="cian"
          >
            Star with paymets <Arrow />
          </Button>
          <WrapBox></WrapBox>
        </div>
        <div>
          <Image
            src="/images/server-stripe.png"
            alt="payments"
            width={436}
            height={530}
          />
        </div>
      </Container>
      <div className="dividerTwo"></div>
    </SectionDesignedForDevelopers>
  </>
);

export default DesignedForDevelopers;
