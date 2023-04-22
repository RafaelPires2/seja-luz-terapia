import styled from 'styled-components';

export const ContainerMenuMobile = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.bgPrimary};
  position: fixed;
  top: 0;
  z-index: 10;
  overflow: hidden;

  ul {
    flex-direction: column;
    font-size: 2.2rem;
    margin-bottom: 36px;
  }

  .container-logo-menu-mobile {
    display: flex;
    align-items: center;
    width: 100vw;
    justify-content: center;
    margin-bottom: ${(props) => props.theme.margin};
    background-color: ${(props) => props.theme.bgSecondary};
  }
  .content-logo-menu-mobile {
    display: flex;
    align-items: center;
    width: 90vw;
    justify-content: space-between;
  }
`;
