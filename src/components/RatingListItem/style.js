import styled from 'styled-components';
import colors from '@colors';

export const RateContainer = styled.form`
  width: min(100%, 640px);
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  box-sizing: border-box;
`

export const RateTopInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const RateMessage = styled.p`
  color: ${colors.secondary.dark};
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
  border: 1px solid white;
  outline: none;
`

export const RateDate = styled.span`
  color: white;
  font-size: 18px;
`
