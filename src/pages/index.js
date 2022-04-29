//import Head from "next/head";

import styled from "styled-components";
import Partners from "../components/Partners";
import DesignedForDevelopers from "components/DesignedForDevelopers";
import UnifiedPlatform from "../components/UnifiedPlatform";
import DesignedForDevelopersWhite from "components/DesignedForDevelopersWhite";
import GlobalScale from "components/GlobalScale";
import ReadyToGetStarted from "components/ReadyToGetStarted";
import Hero from "components/Hero";

/*const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primarydarkblue};
`;*/

const Home = () => {
  return (
    <>
      <Hero />
      <Partners />
      <UnifiedPlatform />
      <DesignedForDevelopers />
      <DesignedForDevelopersWhite />
      <GlobalScale />
      <ReadyToGetStarted />
    </>
  );
};

export default Home;
