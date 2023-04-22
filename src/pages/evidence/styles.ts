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
  button[type='button'] {
    width: 100%;
  }
  
  @media only screen and (max-width: 425px) {
    flex-direction: column;
    align-items: start;
    
    h1 {
      font-size: 4rem;
      margin-bottom: 32px;
    }

    .container-navigation {
      margin-block: 32px;
    }
  }

 
`;
