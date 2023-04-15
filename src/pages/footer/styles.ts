import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: ${(props) => props.theme.bgSecondary};

  margin-top: ${(props) => props.theme.margin};
`;
export const ContentFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60vw;
  padding-block: 60px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  li {
    display: flex;
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.bgButton};

    :hover {
      color: ${(props) => props.theme.bgButtonHover};
    }
  }
  .container-navigation {
    display: flex;
    gap: 30px;
  }

  .container-icons {
    display: flex;
    gap: 16px;
  }
`;
