import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --green: #00875F;
    --green-dark: #015F43;
    --green-light:#00B37E ;

    --red: #F75A68;
    --red-dark: #AA2834;

    --background: #121214;
    --shape-primary: #202024;
    --shape-secondary: #29292E;
    --shape-terciary: #323238;

    --placeholder: #7C7C8A;
    --text: #C4C4CC;
    --title: #E1E1E6;
    --white: #FFFFFF; 
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }

    color: var(--text);
  }

  body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    background-color: var(--shape-primary);
  }
  body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    background: rgba(0, 0, 0, 0.75);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width: 100%;
    max-width: 535px;
    background: var(--shape-primary);
    padding: 3rem;
    border-radius: 0.375rem;
    box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.8);
    position: relative;
  } 

  .react-modal-close{
    background: transparent;
    border: 0;
    position: absolute;
    right: 1.7813rem;
    top: 1.7813rem;
    transition: filter 0.3s;
    &:hover{
      filter: brightness(0.8);
    }
  }
`;
