import React from "react";
import { TitleHone } from "components/Common/title/styles";
import Paragraph from "components/Common/paragraph";
import { BoxHero } from "./styles";

const Box = () => {
  return (
    <BoxHero>
      <TitleHone>hola</TitleHone>
      <Paragraph>
        Millions of businesses of all sizes—from startups to large
        enterprises—use Stripe’s software and APIs to accept payments, send
        payouts, and manage their businesses online.
      </Paragraph>
    </BoxHero>
  );
};

export default Box;
