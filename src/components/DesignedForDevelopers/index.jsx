import { SectionDesignedForDevelopers, WrapBox } from "./styles";
import { Container } from "../../styles/InterfaceComponents";
import { motion } from "framer-motion";
import Card from "../Common/card/Card";
import UrlButtons from "../constants/urlButtons";
import Paragraph from "../Common/paragraph";
import TitleH2 from "../Common/title/TitleH2";
import Button from "components/Common/button";
import Arrow from "components/icons/Arrow";
import Image from "next/image";

const DesignedForDevelopers = () => (
  <>
    <SectionDesignedForDevelopers id="Developers">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        viewport={{ once: true }}
      >
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
            <WrapBox>
              <Card
                src="/images/tools-for-every-stack.png"
                subtitle="Tools for every stack"
                text="We offer client and server libraries in everything from React and PHP to .NET and iOS."
                className="icon"
              />
              <Card
                src="/images/tools-for-every-stack.png"
                subtitle="Tools for every stack"
                text="We offer client and server libraries in everything from React and PHP to .NET and iOS."
              />
            </WrapBox>
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
      </motion.div>
      <div className="dividerTwo"></div>
    </SectionDesignedForDevelopers>
  </>
);

export default DesignedForDevelopers;
