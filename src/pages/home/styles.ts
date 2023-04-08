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
  }

  p {
    margin-bottom: 6.4rem;
  }
`;

export const ContentB = styled.aside`
  display: flex;
  width: 45%;

  img {
    width: 100%;
  }
`;
