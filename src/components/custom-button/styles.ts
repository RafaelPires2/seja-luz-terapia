import { ButtonHTMLAttributes } from 'react';
import styled, { keyframes } from 'styled-components';


const scaleButton = keyframes`
  0%, 100% {
    scale: 1;
  }
  50% {
    scale: 1.1;
  }  
`;

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonContainerProps = {
  width: string;
  height: string;
  textColor?: string;
} & ButtonType;

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.theme.bgButton};

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 4px;

  font-size: 1.6rem;
  font-weight: 600;
  padding: 1rem;
  cursor: pointer;
  animation: ${scaleButton} 4s linear infinite;

  :hover {
    background-color: ${(props) => props.theme.bgButtonHover};
  }
`;


