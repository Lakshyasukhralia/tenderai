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
     /* Apply font styles globally to inputs, textareas, and selects */
  input, textarea, select {
    font-family: 'Poppins', sans-serif;  /* Ensure Poppins font applies to input text */
    font-size: 1rem;  /* Global font size for input text */
    color: #333;  /* Global input text color */
  }

  /* Placeholder styling globally */
  ::-webkit-input-placeholder {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    color: #888;  /* Color for placeholder text */
  }

  ::-moz-placeholder { /* For Firefox 19+ */
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    color: #888;
  }

  :-ms-input-placeholder { /* For Internet Explorer 10+ */
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    color: #888;
  }

  ::placeholder {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    color: #888;  /* Color for placeholder text */
  }
`;
