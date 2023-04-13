import { createGlobalStyle } from "styled-components";
import { theme } from "styles/theme";

export const GlobalStyle = createGlobalStyle`

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: ${theme.fonts.montserrat};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.medium};
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
li {
  margin: 0;
  padding: 0;
}

input {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}
`;
