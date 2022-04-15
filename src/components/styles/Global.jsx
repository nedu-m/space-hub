import "@fontsource/barlow-condensed";
import "@fontsource/space-mono";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  figure,
  picture {
    margin: 0;
  }

body {
  line-height: 1.5;
  min-height: 100vh;
}

img,
picture {
}

input,
button,
select,
textarea {
  font: inherit;
}

@media (prefers-reduced-motion: reduce) {
  *,  
  *::before,  
  *::after { 
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
`;

export default GlobalStyle;