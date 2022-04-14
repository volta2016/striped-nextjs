import { createGlobalStyle } from "styled-components";
import theme from "./theme/uiTheme";
const { fonts } = theme;

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: ${fonts[0]}, "sans-serif";
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.primary.subtitles};
  }
  main {
    padding: 0 1rem;
  }
  ul, ol {
    padding: 0;
    margin: 0;
  }

  p {
    margin: 1rem 0;
    font-size: 1rem;
    line-height: 1.7rem;
  }

  b {
    font-weight: bold;
  }

  a {
    list-style: none;
    text-decoration: none;
    color: inherit;
    @media(hover: hover) {
      &:hover {
        text-decoration: none;
      }
    }
  }
  
  

    
   button {
    border-radius: 0;
    border: none;
    font-family:  ${fonts[1]}, "sans-serif";
    font-weight: 700;
    background-color: transparent;
    &:focus {
      outline: none;
    }
  }
`;

export default GlobalStyle;