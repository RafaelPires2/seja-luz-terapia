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
  width: 80vw;

  button {
    margin-top: 32px;
  }
`;
