import { CompanyLogo } from "./styles";
import NextImage from "components/Common/image";
import React from "react";

const Brand = ({ brand }) => {
  const { name, image } = brand;
  return (
    <CompanyLogo>
      <NextImage
        src={image}
        alt={name}
        height="40"
        className="image"
      ></NextImage>
    </CompanyLogo>
  );
};

export default Brand;
