import styled from 'styled-components';

export const ContainerHeaderMobile = styled.header`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
  background-color: ${(props) => props.theme.bgSecondary};

  position: fixed;
  top: 0;

  z-index: 100;

  main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
