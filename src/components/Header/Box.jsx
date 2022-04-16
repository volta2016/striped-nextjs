import React from "react";
import { TitleHone } from "components/Common/title/styles";
import { BoxHero } from "./styles";
import UrlButtons from "../constants/urlButtons";
import Paragraph from "components/Common/paragraph";
import Button from "../Common/button";
import Arrow from "components/icons/Arrow";

const Box = () => {
  return (
    <BoxHero>
      <TitleHone>Payments infrastructure for the internet</TitleHone>
      <Paragraph>
        Millions of businesses of all sizes—from startups to large
        enterprises—use Stripe’s software and APIs to accept payments, send
        payouts, and manage their businesses online.
      </Paragraph>
      <Button
        link={UrlButtons.Portafolio}
        tipo="link"
        role="link"
        target="_blank"
        rel="noreferrer"
      >
        Start now
        <Arrow />
      </Button>
      <Button
        link={UrlButtons.Github}
        tipo="link"
        role="link"
        target="_blank"
        rel="noreferrer"
        outline="true"
        className="ountlinetwo"
      >
        Contact sales
        <Arrow />
      </Button>
    </BoxHero>
  );
};

export default Box;
