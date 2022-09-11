import styled from 'styled-components';
import colors from '@colors'

export const EducatorContainer = styled.button`
  width: 250px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: white;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;

  &:hover, &:focus {
    img {
      border: 2px solid white;
    }

    h3{
      text-decoration: underline;
    }
  }
`;

export const EducatorName = styled.h3`
  font-weight: bold;
  font-size: 24px;
  text-decoration: none;
  text-align: center;
  margin-top: 10px;
`;

export const EducatorImage = styled.img`
  object-fit: cover;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  box-sizing: border-box;
`

export const EducatorType = styled.span`
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  text-align: center;
  text-transform: capitalize;
  background-color: ${colors.primary.main};
  color: ${colors.secondary.dark};
  padding: 5px 10px;
  margin-top: 5px;
  border-radius: 15px;
`;

export const EducatorInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
  box-sizing: border-box;
  font-size: 20px;
`
