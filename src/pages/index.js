import Partners from "../components/Partners";
import DesignedForDevelopers from "components/DesignedForDevelopers";
import UnifiedPlatform from "../components/UnifiedPlatform";
import DesignedForDevelopersWhite from "components/DesignedForDevelopersWhite";
import GlobalScale from "components/GlobalScale";
import ReadyToGetStarted from "components/ReadyToGetStarted";
import Hero from "components/Hero";

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
