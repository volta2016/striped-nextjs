import React from "react";
import { Container, ContainerFull } from "../../styles/InterfaceComponents";
import { GridText } from "./styles";
import { motion } from "framer-motion";
import UrlButtons from "../constants/urlButtons";
import Image from "next/image";
import Paragraph from "../Common/paragraph";
import TitleH2 from "../Common/title/TitleH2";
import Button from "components/Common/button";
import Arrow from "components/icons/Arrow";

{
  /* <Container>
        <motion.div
          initial={{ opacity: 0, x: "-100vh" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: true }}
        ></motion.div> */
}

const UnifiedPlatform = () => {
  return (
    <section>
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: true }}
        >
          <Paragraph bold="purple">Unified platform</Paragraph>
          <TitleH2 colortitle="headlines" variant="col-6">
            A fully integrated suite of payments products
          </TitleH2>
          <GridText>
            <div>
              <Paragraph>
                We bring together everything that’s required to build websites
                and apps that accept payments and send payouts globally.
                Stripe’s products power payments for{" "}
                <span>
                  {" "}
                  online and in-person retailers, subscriptions businesses,
                  software platforms and marketplaces,
                </span>{" "}
                and everything in between.
              </Paragraph>
              <Button
                link={UrlButtons.Github}
                tipo="link"
                role="link"
                target="_blank"
                rel="noreferrer"
                backcolor="purple"
              >
                Star with paymets <Arrow />
              </Button>
            </div>
            <Paragraph>
              We also help companies{" "}
              <span>
                beat fraud, send invoices, issue virtual and physical cards, get
                financing, manage business spend,
              </span>{" "}
              and much more.
            </Paragraph>
          </GridText>
        </motion.div>
      </Container>
      <ContainerFull>
        <motion.div
          initial={{ opacity: 0, x: "-100vh" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/payments.png"
            alt="payments"
            width={1223}
            height={971}
          />
        </motion.div>
      </ContainerFull>
      <div className="dividerOne"></div>
    </section>
  );
};

export default UnifiedPlatform;
