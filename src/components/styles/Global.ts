import { createGlobalStyle } from "styled-components";
import background from "../../assets/images/univer.webp";

const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
  }

  html, body {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  background: url(${background})  no-repeat center fixed;
  background-size: cover;
  max-width: 100%;
  margin: 0;
  font-size: 1.15em;
  color: white;
  }

  #logo {
  height: 45px;
}

`;

export default GlobalStyles;
