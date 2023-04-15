import styled from "styled-components";

export const ContainerEvidence = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
        margin-top: ${props => props.theme.margin};
    }

    h1 {
        font-style: italic;
        color: ${props => props.theme.bgButton};
        margin-bottom: ${props => props.theme.margin};
    }
`;
