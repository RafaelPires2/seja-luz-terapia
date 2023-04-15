import styled from 'styled-components';

export const ContainerHome = styled.div`
  display: flex;
  width: 100%;
  margin-top: ${(props) => props.theme.margin};
`;

export const ContentHome = styled.div`
  display: flex;
  align-items: center;
  gap: 10%;
`;

export const ContentA = styled.main`
  display: flex;
  flex-direction: column;
  width: 45%;

  h1 {
    margin-bottom: 1.6rem;
    color: ${props => props.theme.bgButton};
    font-size: 48px;
    font-style: italic;
  }

  p {    
    font-size: 20px;
    margin-bottom: 6.4rem;
  }
`;

export const ContentB = styled.aside`
  display: flex;
  width: 45%;

  .container-img{
    width: 100%;
    height: 100%;
    background-color: #FFBBFC6C;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 7px 7px 20px 0px ${props => props.theme.bgButton};
    border-radius: 8px;
  }

  img {
    max-height: 500px;
    box-shadow: 0 0 10px 10px #FAACF66C;
  }
`;
