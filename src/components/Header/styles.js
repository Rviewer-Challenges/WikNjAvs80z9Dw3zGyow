import styled from 'styled-components';
import logo from '../icons/Logo';
import colors from '@colors'

export const Header = styled.header`
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: ${colors.secondary.dark};

  box-shadow: ${colors.secondary.dark} 0px 5px 15px;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 30px 30px;
  box-sizing: border-box;
`

export const Logo = styled(logo)`
`

export const FilterButton = styled.button`
  font-size: 28px;
  border: none;
  border-radius: 50%;
  background: none;
  width: 50px;
  height: 50px;
  color: ${colors.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => !props.show &&
    "display: none;"}


  &:focus, &:hover {
    outline: none;
    color: ${colors.primary.dark};
    background-color: ${colors.secondary.dark};
  }
`
