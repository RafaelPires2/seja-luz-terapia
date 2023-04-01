import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;  
    }
    :root {
        font-size: 62.5%;
    }

    :focus {
        outline: 0;
    }

    html{
    scroll-behavior: smooth;
   // color: white;
   // overflow-x: hidden;
    }

    ::-webkit-scrollbar{
    width: 10px;
    background-color: $background-primary;
    }
    ::-webkit-scrollbar-thumb{
        background-color: $color-point;
        border-radius: 2rem; 
}

    body, input, textarea, button, a {
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
        list-style: none;
        color: inherit;
    }

`;
