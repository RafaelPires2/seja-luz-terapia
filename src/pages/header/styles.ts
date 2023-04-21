import styled from 'styled-components';

export const ContainerHeader = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
  background-color: ${(props) => props.theme.bgSecondary};
`;

export const ContentHeader = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 1920px) {
    width: 60vw;
  }

  @media only screen and (max-width: 1024px) {
    width: 90vw;
  }
  @media only screen and (max-width: 769px) {
    button {
      width: 150px;
    }
  }
`;

export const MenuNavigation = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    font-size: 1.6rem;
    font-weight: 600;
  }
  a {
    color: ${(props) => props.theme.bgButton};

    :hover {
      color: ${(props) => props.theme.bgButtonHover};
    }
  }
`;
