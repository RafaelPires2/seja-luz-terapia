import styled, { createGlobalStyle } from 'styled-components';

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
    // background-color: $background-primary;
    }
    ::-webkit-scrollbar-thumb{
   //     background-color: $color-point;
        border-radius: 2rem; 
}

    body, input, textarea, button, a, li{ 
        font-family: 'Poppins', sans-serif;
        text-decoration: none;
        list-style: none;
        color: inherit;
    }
    body {
        display: flex;
        width: 100vw;
        height: 100%;
        justify-content: center;
        align-items: center;
        background-color: ${(props) => props.theme.bgPrimary};
    }
`;

export const Wrapper = styled.main`
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.sizeTitle};
  color: ${(props) => props.theme.colorTitle};
`;

export const Paragraph = styled.p`
  font-size: ${(props) => props.theme.sizeParagraph};
  color: ${(props) => props.theme.colorParagraph};
`;
