import styled from 'styled-components';
import colors from '@colors'

export const DialogueBackground = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
`;

export const Dialogue = styled.div`
  position: absolute;
  padding: 50px 50px;
  background-color: ${colors.secondary.dark};
  max-width: calc(100vw - 20px);
  max-height: calc(100vh - 50px);
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  box-sizing: border-box;
  overflow: hiddend;
  overflow-y: auto;
`

export const CloseButton = styled.button`
  font-size: 20px;
  border: none;
  border-radius: 50%;
  background: none;
  width: 30px;
  height: 30px;
  color: ${colors.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;

  & svg {
    pointer-events: none;
  }


  &:focus, &:hover {
    outline: none;
    color: ${colors.primary.dark};
    background-color: ${colors.secondary.dark};
  }
`
