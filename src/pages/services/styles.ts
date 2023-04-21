import styled from 'styled-components';

export const SectionCardService = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: ${(props) => props.theme.margin};
`;
export const ContainerCardService = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;

  button {
    margin-top: 32px;
  }

  h1 {
    font-style: italic;
    color: ${(props) => props.theme.bgButton};
    margin-bottom: ${(props) => props.theme.margin};
  }

  @media only screen and (min-width: 1920px) {
    width: 60vw;
  }
  @media only screen and (max-width: 1024px) {
    width: 90vw;
  }

  @media only screen and (max-width: 425px) {
    align-items: start;

    h1 {
      font-size: 40px;
    }

    a {
      display: flex;
      justify-content: center;
    }
    button {
      width: 90%;
    }
  }
`;
