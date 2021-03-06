import NextImage from "components/Common/image";
import Paragraph from "components/Common/paragraph";
import { TitleHthreeSub } from "components/Common/title/styles";
import { CardContainer, Article } from "./styles";

const container = {
  hidden: { opacity: 0, x: "-100%" },
  show: {
    opacity: 1,
    x: "0%",
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const FourCard = () => {
  return (
    <CardContainer
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Article variants={item}>
        <NextImage
          src="/images/close-to-the-metal.png"
          alt="close to the metal"
          height="80"
          width="80"
          className="icon"
        />
        <TitleHthreeSub colortitle="headlines">
          Close to the metal
        </TitleHthreeSub>
        <Paragraph lineheight={true}>
          From <span> direct integrations</span> with card networks and banks to
          checkout flows in the browser, we operate on and optimize at every
          level of the financial stack.
        </Paragraph>
      </Article>
      <Article variants={item}>
        <NextImage
          src="/images/fastest-improving-platform.png"
          alt="fastest improving platform"
          height="80"
          width="80"
          className="icon"
        />
        <TitleHthreeSub colortitle="headlines">
          Fastest-improving platform
        </TitleHthreeSub>
        <Paragraph lineheight={true}>
          We release <span>hundreds of features</span> and improvements each
          year to help you stay ahead of industry shifts. (On average, we deploy
          our production API 16x per day.)
        </Paragraph>
      </Article>
      <Article variants={item}>
        <NextImage
          src="/images/battle-tested-reliability.png"
          alt="battle tested reliability"
          height="80"
          width="80"
          className="icon"
        />
        <TitleHthreeSub colortitle="headlines">
          Battle-tested reliability
        </TitleHthreeSub>
        <Paragraph lineheight={true}>
          Our systems operate with <span>99.9%+</span> uptime and are highly
          scalable and redundant. Striped is certified to the highest compliance
          standards.
        </Paragraph>
      </Article>
      <Article variants={item}>
        <NextImage
          src="/images/intelligent-optimizations.png"
          alt="intelligent optimizations"
          height="80"
          width="80"
          className="icon"
        />
        <TitleHthreeSub colortitle="headlines">
          Intelligent optimizations
        </TitleHthreeSub>
        <Paragraph lineheight={true}>
          Our machine learning models train on <span>billions</span> of data
          points and help increase revenue across conversion, fraud, revenue
          recovery, and more.
        </Paragraph>
      </Article>
    </CardContainer>
  );
};

export default FourCard;
