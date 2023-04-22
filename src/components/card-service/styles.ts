import styled from 'styled-components';

export const ContainerCards = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 3%;
  margin-bottom: 32px;

  @media only screen and (max-width: 425px) {
    flex-direction: column;
    margin-bottom: 0;
  }
`;

export const CardServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;

  min-height: 500px;
  background-color: white;
  border-radius: 6px;
  border-top-left-radius: 40px;

  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.15));

  img {
    width: 100%;
    height: 200px;
    border-top-left-radius: 40px;
    border-top-right-radius: 6px;
    border-bottom: 1px solid #ccc;
  }
  div {
    padding: 24px 20px;
  }

  h2 {
    color: ${(props) => props.theme.bgButton};
    font-size: 2.6rem;
    margin-bottom: 8px;
  }

  p {
    color: ${(props) => props.theme.colorTitle};
    font-size: 1.6rem;
    line-height: 1.3;
  }

  @media only screen and (max-width: 1024px) {
    div {
      padding: 12px 20px;
    }
    p {
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: 768px) {
    min-height: 470px;

    div {
      padding: 8px 20px;
    }
    h2 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1.4rem;
    }

    img {
      height: 150px;
    }
  }

  @media only screen and (max-width: 425px) {
    min-height: 370px;
    margin-bottom: 32px;

    div {
      padding: 20px 20px;
    }
    h2 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1.6rem;
    }

    img {
      height: 200px;
    }
  }
`;
