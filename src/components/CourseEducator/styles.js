import styled from 'styled-components';
import colors from '@colors'
import { mobileBreakdown } from '@/assets/style'

export const EducatorContainer = styled.button`
  width: 200px;
  padding: 20px;
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

  @media only screen and (max-width: ${mobileBreakdown}) {
    width: 200px;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
    border-top: 1px solid ${colors.secondary.light};
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

  @media only screen and (max-width: ${mobileBreakdown}) {
    width: 50px;
    height: 50px;
  }
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

  @media only screen and (max-width: ${mobileBreakdown}) {
   display: none;
  }
`;
