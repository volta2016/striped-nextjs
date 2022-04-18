import React from "react";
import Brand from "./Brand";
import { GridBrands } from "./styles";

const GridPartners = ({ partners }) => {
  //console.log(partners);
  return (
    <GridBrands>
      {partners.map((brand, index) => (
        <Brand key={index} brand={brand} />
      ))}
    </GridBrands>
  );
};

export default GridPartners;
