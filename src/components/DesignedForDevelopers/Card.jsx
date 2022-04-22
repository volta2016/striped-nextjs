import UrlButtons from "../constants/urlButtons";
import Button from "components/Common/button";
import Paragraph from "components/Common/paragraph";
import H3subTitle from "components/Common/title/H3subTitle";
import Arrow from "components/icons/Arrow";
import NextImage from "../Common/image/";
import { CardContent } from "./styles";

const Card = ({ src, subtitle, text }) => {
  return (
    <CardContent>
      <NextImage src={src} alt={text} height="80" width="80" className="icon" />
      <H3subTitle colortitle="white">{subtitle}</H3subTitle>
      <Paragraph className="card" colorfont="white">
        {text}
      </Paragraph>
      <Button
        link={UrlButtons.Github}
        tipo="link"
        role="link"
        target="_blank"
        rel="noreferrer"
        outline="true"
        className="outlinecard"
      >
        See libraries
        <Arrow className="outlinecard" />
      </Button>
    </CardContent>
  );
};

export default Card;
