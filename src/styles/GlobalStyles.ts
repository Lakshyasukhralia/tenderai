import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;  /* Ensure the body takes the full height of the viewport */
  }

  body {
    font-family: 'Poppins', sans-serif; /* Apply Poppins font */
    background-color: #f1f3f4;
    color: #333;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif; /* Apply Poppins to headings */
  }

  a {
    font-family: 'Poppins', sans-serif; /* Apply Poppins to links */
    text-decoration: none;
    color: inherit;
  }
`;
