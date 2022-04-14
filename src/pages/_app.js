import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme/uiTheme";
import { DefaultSeo } from "next-seo";
import GlobalStyle from "../styles/GlobalSytles";
import SEO from "../../next-seo.config";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <GlobalStyle />
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
