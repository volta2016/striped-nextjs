//import Head from "next/head";

import styled from "styled-components";
import Partners from "../components/Partners";
import DesignedForDevelopers from "components/DesignedForDevelopers";
import UnifiedPlatform from "../components/UnifiedPlatform";
import DesignedForDevelopersWhite from "components/DesignedForDevelopersWhite";
import GlobalScale from "components/GlobalScale";
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primarydarkblue};
`;

const Home = () => {
  return (
    <>
      <Partners />
      <UnifiedPlatform />
      <DesignedForDevelopers />
      <DesignedForDevelopersWhite />
      <GlobalScale />
    </>
  );
};

export default Home;
