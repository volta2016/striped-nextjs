import React from "react";
import { Container } from "../../styles/InterfaceComponents";
import { partners } from "../constants/partners";
import GridPartners from "./GridPartners";

const Partners = () => {
  return (
    <section>
      <Container>
        <GridPartners partners={partners.brands}></GridPartners> Partners
      </Container>
    </section>
  );
};

export default Partners;
