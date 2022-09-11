import styled from 'styled-components';
import colors from '@colors'

export const mobileBreakdown = '500px';

export const Main = styled.main`
  @import url("https://fonts.googleapis.com/css?family=Roboto:200,400,600&display=swap");

  font-family: "Roboto", sans-serif;

  width: 100%;
  height: 100vh;
  background-color: ${colors.secondary.dark};
  overflow: auto;

  background: rgb(2,0,36);
  background: linear-gradient(${colors.secondary.main} 10%, ${colors.secondary.light} 100%);
`;

export const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  
`

export const FormInput = styled.input`
  border: none;
  padding: 5px 15px;
  font-size: 20px;
  color: white;
  border-radius: 5px;
  background-color: ${colors.secondary.main};
  position: static;
  margin: 0;

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.error && 'border: 1px solid ' + colors.primary.dark}
`

export const Textarea = styled.textarea`
  border: none;
  padding: 5px 15px;
  font-size: 20px;
  color: white;
  border-radius: 5px;
  background-color: ${colors.secondary.main};
  position: static;
  margin: 0 auto;
  max-width: calc(100% - 30px);

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.error && 'border: 1px solid ' + colors.primary.dark}
`

export const Label = styled.label`
  border: none;
  padding-left: 5px;
  font-size: 16px;
  color: white;
  border-radius: 5px;
  position: static;
  margin-top: 20px;
  width: 100%;
  font-weight: 500;
  letter-spacing: 1px;
`

export const FormSelect = styled.select`
  border: none;
  padding: 5px 15px;
  font-size: 18px;
  color: white;
  border-radius: 5px;
  background-color: ${colors.secondary.main};
  position: static;
  margin: 0 auto;
  width: 100%;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.error && 'border: 1px solid ' + colors.primary.dark}
`

export const Button = styled.button`
  border: none;
  padding: 6px 10px;
  font-size: 18px;
  border-radius: 5px;
  background-color: ${colors.primary.main};
  color: ${colors.secondary.dark};
  outline: none;
  font-weight: 600;
  margin-top: 25px;
  cursor: pointer;

  &:focus, &:hover {
    outline: none;
    padding: 5px 10px;
    border: 1px solid ${colors.secondary.dark};
    background-color: ${colors.primary.light};
  }
`

export const Error = styled.span`
  font-size: 14px;
  color: ${colors.primary.dark};
  margin: -5px 0 0 5px;
  ${(props) =>
    !props.display &&
    "display: none"});
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const TopButtons = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
`

export const TopButton = styled.button`
  width: calc(50% - 1px);
  border: none;
  padding: 6px 10px;
  font-size: 18px;
  background: none;
  color: white;
  outline: none;
  cursor: pointer;
  border-radius: 2px;


  text-decoration: ${(props) =>
    props.selected ? 'underline' : 'none'};

  &:focus, &:hover {
    outline: none;
    background-color: ${colors.secondary.main};
  }
`

export const Separator = styled.div`
  border: 1px solid white;
  height: 20px;
  width: 0;
`

