import styled from "styled-components";

export const ContainerEvidence = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
        margin-top: ${props => props.theme.margin};
    }
`;
