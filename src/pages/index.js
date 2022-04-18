//import Head from "next/head";
import styled from "styled-components";
import Partners from "../components/Partners";
import UnifiedPlatform from "../components/UnifiedPlatform";
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primarydarkblue};
`;

const Home = () => {
  return (
    <>
      <Partners />
      <UnifiedPlatform />
    </>
  );
};

export default Home;
