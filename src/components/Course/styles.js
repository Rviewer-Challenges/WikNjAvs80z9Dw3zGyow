import styled from 'styled-components';
import colors from '@colors'
import { Link } from "react-router-dom";
import { mobileBreakdown } from '@/assets/style'

export const CourseContainer = styled.div`
  width: 100vw;
  border-bottom: 2px solid ${colors.secondary.dark};
  background-color: ${({isHovered}) => isHovered ? colors.secondary.light  : colors.secondary.main};
  box-sizing: border-box;

  @media only screen and (max-width: ${mobileBreakdown}) {
    padding: 0;
  }
`;
export const CourseMain = styled.div`
  width: min(100vw, 800px);
  margin: 0 auto;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;

  @media only screen and (max-width: ${mobileBreakdown}) {
    flex-direction: column-reverse;
  }
`;

export const CourseContent = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100%;
  width: 100%;
  padding: 20px;
  margin-left: 10px;
  box-sizing: border-box;
  color: white;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;

  &:hover, &:focus {
    h2 {
      text-decoration: underline;
    }
  }

  @media only screen and (max-width: ${mobileBreakdown}) {
    margin-left: 0;
    padding: 30px 20px 0;
  }
`;

export const CourseTitle = styled.h2`
  font-weight: bold;
  font-size: 36px;

  @media only screen and (max-width: ${mobileBreakdown}) {
    text-align: center;
  }
`;

export const CourseTopInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 30px;
  box-sizing: border-box;
  font-size: 20px;
`

export const CoursePrice = styled.span`
  font-weight: bold;
  font-size: 32px;
  align-self: flex-end;
  margin-top: 20px;
`

export const CourseInfoRow = styled.span`
  font-size: 20px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 20px;
`
