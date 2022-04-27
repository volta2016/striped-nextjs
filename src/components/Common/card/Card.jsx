import UrlButtons from "components/constants/urlButtons";
import Button from "components/Common/button";
import Paragraph from "components/Common/paragraph";
import H3subTitle from "components/Common/title/H3subTitle";
import Arrow from "components/icons/Arrow";
import NextImage from "../image";
import { CardContent } from "../../../styles/InterfaceComponents";

const Card = ({ src, subtitle, text }) => {
  return (
    <CardContent className="card color">
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
        outline="cian"
        className="outlinecard"
      >
        See libraries
        <Arrow className="outlinecard" />
      </Button>
    </CardContent>
  );
};

export default Card;
