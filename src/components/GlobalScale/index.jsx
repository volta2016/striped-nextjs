import Paragraph from "components/Common/paragraph";
import TitleH2 from "components/Common/title/TitleH2";
import DateStadistics from "./DateStadistics";
import { Container } from "styles/InterfaceComponents";
import { SectionGlobalScale, BoxGlobal, CardContainer } from "./styles";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 120 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

const GlobalScale = () => {
  return (
    <SectionGlobalScale id="Company">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: true }}
        >
          <BoxGlobal>
            <Paragraph bold="cian">Global scale</Paragraph>
            <TitleH2>The backbone for internet business</TitleH2>
            <Paragraph colorfont="white">
              For ambitious companies around the world, Stripe makes moving
              money as simple, borderless, and programmable as the rest of the
              internet. Our teams are based in dozens of offices around the
              world and we process hundreds of billions of dollars each year for{" "}
              <span className="globalscale">
                {" "}
                startups to large enterprises.
              </span>
            </Paragraph>
          </BoxGlobal>
          <CardContainer
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <DateStadistics />
          </CardContainer>
        </motion.div>
      </Container>
    </SectionGlobalScale>
  );
};

export default GlobalScale;
