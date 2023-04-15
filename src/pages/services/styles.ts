import styled from 'styled-components';

export const SectionCardService = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: ${(props) => props.theme.margin};
  `;
export const ContainerCardService = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60vw;

  button {
    margin-top: 32px;
  }

  h1 {
        font-style: italic;
        color: ${props => props.theme.bgButton};
        margin-bottom: ${props => props.theme.margin};
    }
`;
