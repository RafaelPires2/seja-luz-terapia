import styled from 'styled-components';

export const ContainerHeader = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7rem;
  background-color: ${(props) => props.theme.bgSecondary};
`;

export const ContentHeader = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuNavigation = styled.nav`
  ul {
    display: flex;
    gap: 25px;
    font-size: 1.4rem;
    font-weight: 500;
  }

  a:hover {
    transition: 0.3s;
    color: ${(props) => props.theme.bgButton};
    font-weight: 600;
  }
`;
