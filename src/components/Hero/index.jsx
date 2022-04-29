import Box from "./Box";
import NextImage from "components/Common/image";
import { HeroBg } from "components/Header/styles";
import { Container } from "styles/InterfaceComponents";

const Hero = () => {
  return (
    <>
      <HeroBg />
      <Container wrapper={true}>
        <Box />
      </Container>
      <NextImage
        src="/payment-hero.png"
        alt="Payments 
              infrastructure 
              for the internet"
        width="600"
        height="700"
        className="heroimage"
      />
    </>
  );
};

export default Hero;
