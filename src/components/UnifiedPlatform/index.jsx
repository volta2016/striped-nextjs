import React from "react";
import { Container, ContainerFull } from "../../styles/InterfaceComponents";
import { GridText } from "./styles";
import Image from "next/image";
import Paragraph from "../Common/paragraph";
import TitleH2 from "../Common/title/TitleH2";

const UnifiedPlatform = () => {
  return (
    <section>
      <Container>
        <Paragraph bold={true}>Unified platform</Paragraph>
        <TitleH2 variant="col-6">
          A fully integrated suite of payments products
        </TitleH2>
        <GridText>
          <div>
            <Paragraph>
              We bring together everything that’s required to build websites and
              apps that accept payments and send payouts globally. Stripe’s
              products power payments for{" "}
              <span>
                {" "}
                online and in-person retailers, subscriptions businesses,
                software platforms and marketplaces,
              </span>{" "}
              and everything in between.
            </Paragraph>
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
      </Container>
      <ContainerFull>
        <Image
          src="/images/payments.png"
          alt="payments"
          width={1223}
          height={971}
        />
      </ContainerFull>
    </section>
  );
};

export default UnifiedPlatform;
