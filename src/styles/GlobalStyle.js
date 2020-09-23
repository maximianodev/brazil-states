import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #000;
    color: #fff;

    text-align: center;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;

export default GlobalStyle;
