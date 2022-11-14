import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  *,
  *:before,
  *:after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    height: 100vh;
    font-family: 'Poppins', sans-serif;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  input {
    outline: none;
    margin: 0;
  }

  button {
    background-color: transparent;
    cursor: pointer;
    padding: 0;
    margin: 0; 
    border: none;
  }

  svg, image, video {
    vertical-align: top;
  }
`;
