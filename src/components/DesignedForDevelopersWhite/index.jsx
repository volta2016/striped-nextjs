import React from "react";
import { BoxOne } from "./styles";
import { Container } from "styles/InterfaceComponents";
import { motion } from "framer-motion";
import Paragraph from "components/Common/paragraph";
import TitleH2 from "components/Common/title/TitleH2";
import FourCard from "./FourCard";

const DesignedForDevelopersWhite = () => {
  return (
    <section>
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: true }}
        >
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
        </motion.div>
        <FourCard />
      </Container>
      <div className="dividerOne"></div>
    </section>
  );
};

export default DesignedForDevelopersWhite;
