import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/* font-size */
/* --fs-900: clamp(5rem, 8vw + 1rem, 9.375rem);
--fs-800: 3.5rem;
--fs-700: 2.5rem;
--fs-600: 2rem;
--fs-500: 1.5rem;
--fs-400: 1.25rem;
--fs-300: 1rem;
--fs-200: 0.75rem; */

/* fonts */
/* --ff-bell: 'Bellefair', serif;
--ff-cond: 'Barlow Condensed', sans-serif;
--ff-mono: 'Space Mono', monospace; */


/* font-weight */
h1, 
h2, 
h3, 
h4, 
h5, 
h6, 
p {
  font-weight: 400;
}

@media (min-width: ${props => props.theme.breakpoints.md}) {
  /* font-size */
  :root {
    --fs-800: 5rem;
    --fs-700: 2.5rem;
    --fs-600: 1.5rem;
    --fs-500: 1.25rem;
    --fs-400: 1rem;
  }
}

@media (min-width: ${props => props.theme.breakpoints.lg}) {
  /* font-size */
  :root {
    --fs-800: 6.25rem;
    --fs-700: 3.3rem;
    --fs-600: 2rem;
    --fs-500: 1.65rem;
    --fs-400: 1.125rem;
  }
}

/* Reset */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--ff-mono);
  font-size: var(--fs-400);
  background: var(--color-black);
  color: var(--color-white);
  overflow-x: hidden;
}

section {
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
  min-height: 100vh;
  line-height: 1.5;
}

main {
  padding-top: 7rem;
}

img, 
picture {
  max-width: 100%;
  display: block;
}

@media (prefers-reduced-motion: reduce) {  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 0.5rem;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background-color: var(--color-light);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background-color: var(--color-white);
}
`;

export default GlobalStyle;