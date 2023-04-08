import styled from 'styled-components';

export const SectionCardService = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.theme.margin};
`;
export const ContainerCardService = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80vw;
`;

export const ContainerCards = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 32px;
`;

export const CardServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 400px;

  height: 450px;
  background-color: white;
  border-radius: 6px;
  border-top-left-radius: 40px;

  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.15));

  img {
    width: 400px;
    height: 200px;
    border-top-left-radius: 40px;
    border-top-right-radius: 6px;
    border-bottom: 1px solid #ccc;
    
  }
  div {
    padding: 20px 16px;
  }

  h2 {
    color: ${(props) => props.theme.bgButton};
    font-size: 26px;
    margin-bottom: 8px;
  }

  p {
    color: ${(props) => props.theme.colorTitle};
    font-size: 16px;
    line-height: 1.3;
  }
`;
