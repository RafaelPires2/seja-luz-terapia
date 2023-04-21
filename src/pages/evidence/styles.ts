import styled from 'styled-components';

export const ContainerEvidence = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    margin-top: ${(props) => props.theme.margin};
  }

  h1 {
    font-style: italic;
    color: ${(props) => props.theme.bgButton};
    margin-bottom: ${(props) => props.theme.margin};
  }

  a {
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 425px) {
    flex-direction: column;

    .container-navigation {
      margin-block: 32px;
    }
  }
  button[type='button'] {
    width: 100%;
  }

  @media only screen and (max-width: 425px) {
    align-items: start;

    h1 {
        font-size: 40px;
    }
  }
`;
