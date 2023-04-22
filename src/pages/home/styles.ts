import styled from 'styled-components';

export const ContainerHome = styled.div`
  display: flex;
  width: 100%;
  margin-top: ${(props) => props.theme.margin};
  margin-top: 140px;
`;

export const ContentHome = styled.div`
  display: flex;
  align-items: center;
  gap: 10%;

  @media only screen and (max-width: 425px) {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 84px;

    a {
      display: flex;
      justify-content: center;
    }
    button {
      width: 100%;
    }
  }
`;

export const ContentA = styled.main`
  display: flex;
  flex-direction: column;
  width: 45%;

  h1 {
    margin-bottom: 1.6rem;
    color: ${(props) => props.theme.bgButton};
    font-size: 4.8rem;
    font-style: italic;
  }

  p {
    font-size: 2rem;
    margin-bottom: 6.4rem;
  }

  @media only screen and (max-width: 1024px) {
    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 1.8rem;
    }
  }

  @media only screen and (max-width: 425px) {
    width: 100%;

    h1 {
      font-size: 3.4rem;
    }

    p {
      font-size: 1.6rem;
    }
  }
`;

export const ContentB = styled.aside`
  display: flex;
  width: 45%;

  .container-img {
    width: 100%;
    height: 100%;
    background-color: #ffbbfc6c;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 7px 7px 20px 0px ${(props) => props.theme.bgButton};
    border-radius: 8px;
  }

  img {
    max-height: 500px;
    box-shadow: 0 0 10px 10px #faacf66c;
  }

  @media only screen and (max-width: 1024px) {
    img {
      max-height: 450px;
    }

    @media only screen and (max-width: 425px) {
      width: 100%;
    }
  }
`;
