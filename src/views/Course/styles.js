import styled from 'styled-components';
import colors from '@colors'
import { mobileBreakdown } from '@/assets/style'

const tabletBreakDown = "700px"

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
  width: min(100vw, 1000px);
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;

  @media only screen and (max-width: ${tabletBreakDown}) {
    width: min(100vw, 400px);
    flex-wrap: wrap;
    justify-content: space-between;

    &>button {
      width: 140px;
      padding: 0;
      margin: 10px 0;
    }
  }

  @media only screen and (max-width: ${mobileBreakdown}) {
    width: calc(100vw - 40px);
    flex-direction: column;

    &>button {
      width: 200px;
      padding: 0;
      margin: 10px auto;

      &>img {
        margin: 20px 0;
      }
    }
  }
`;

export const CourseContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 540px;
  padding: 30px 20px 20px 0;
  box-sizing: border-box;
  color: white;
  text-decoration: none;

  @media only screen and (max-width: ${tabletBreakDown}) {
    order: -1;
    width: 100%;
  }

  @media only screen and (max-width: ${mobileBreakdown}) {
    margin-left: 0;
    padding: 30px 0 0;
  }
`;

export const CourseTitle = styled.h2`
  font-weight: bold;
  font-size: 36px;

  @media only screen and (max-width: ${mobileBreakdown}) {
    text-align: center;
  }
`;

export const CourseDescription = styled.p`
  font-size: 18px;
  margin-top: 20px;
  line-height: 1.1;
  font-weight: 200;

  @media only screen and (max-width: ${mobileBreakdown}) {
    text-align: center;
  }
`;

export const CourseTopInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  box-sizing: border-box;
  font-size: 20px;
  margin-left: 10px;

  @media only screen and (max-width: ${mobileBreakdown}) {
    width: min(165px, 50% - 75px);
    min-width: 93px;
  }
`

export const CoursePrice = styled.span`
  font-weight: bold;
  font-size: 32px;
  margin-top: 5px;
  margin-left: 10px;

  @media only screen and (max-width: ${mobileBreakdown}) {
    margin: 0;
  }
`

export const CourseInfo = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  font-size: 20px;
  gap: 20px;
  color: white;
  margin: 30px 0 20px;

  @media only screen and (max-width: ${mobileBreakdown}) {
    width: 100%;
    order: -1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`

export const CourseInfoRow = styled.span`
  font-size: 20px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-left: 10px;

  @media only screen and (max-width: ${mobileBreakdown}) {
    width: min(165px, 35%);
    min-width: 110px;
  }
`

export const MoreInfoLink = styled.a`
  font-size: 16px;
  margin-top: 20px;
  color: ${colors.primary.main};
`
