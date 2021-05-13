import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, html, body, #root {
    margin: 0;
    padding: 0
    outline: none !important;
  }

  body {
    background-color: #ffffff;
    font-smooth: antialiased;
  }
`;

export default GlobalStyle;
