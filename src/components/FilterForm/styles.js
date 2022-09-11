import styled from 'styled-components';
import colors from '@colors'

export const FreeButton = styled.button`
  font-size: 20px;
  border: 2px solid ${colors.secondary.light};
  border-radius: 10px;
  color: ${(props) =>
    props.active ? 'white' : '#fff8'};
  background-color: ${(props) =>
    props.active ? colors.secondary.light : colors.secondary.main};
  font-size: 18px;
  letter-spacing: 1.5px;
  padding: 6px;
  margin 15px auto 0;
  width: min(100%, 100px);
  cursor: pointer;
  box-sizing: border-box;

  &:focus, &:hover {
    outline: none;
    border: 1px solid white;
    padding: 7px;
  }
`

