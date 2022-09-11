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

export const RateMessage = styled.textarea`
  color: ${colors.secondary.dark};
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
  border: 1px solid white;
  outline: none;
`

export const RateMessageSend = styled.button`
  margin: 10px auto 0;
  width: fit-content;
  background-color: ${colors.primary.main};
  border: none;
  padding: 5px 25px;
  font-size: 18px;
  font-weight: bold;
  color: ${colors.secondary.dark};
  border-radius: 5px;
  cursor: pointer;
`

export const CloseButton = styled.button`
  font-size: 20px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
`

export const AddRating = styled.button`
  margin: 10px auto 0;
  width: fit-content;
  background-color: ${colors.primary.main};
  border: none;
  padding: 5px 25px;
  font-size: 18px;
  font-weight: bold;
  color: ${colors.secondary.dark};
  border-radius: 5px;
  cursor: pointer;
`

export const NoRatings = styled.p`
  margin: 0 auto;
  text-align: center;
  font-size: 32px;
  color: white;
  margin-top: 50px;
  margin-bottom: 50px;
`
