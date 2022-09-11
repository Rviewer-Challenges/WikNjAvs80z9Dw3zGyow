import styled from 'styled-components';
import colors from '@colors'
import { mobileBreakdown } from '@/assets/style'

const tabletBreakDown = "700px"

export const EducatorContainer = styled.div`
  width: 100vw;
  border-bottom: 2px solid ${colors.secondary.dark};
  background-color: ${({isHovered}) => isHovered ? colors.secondary.light  : colors.secondary.main};
  box-sizing: border-box;

  @media only screen and (max-width: ${mobileBreakdown}) {
    padding: 0;
  }
`;
export const EducatorMain = styled.div`
  width: min(100vw, 1000px);
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  gap: 40px;

  @media only screen and (max-width: ${tabletBreakDown}) {
    width: min(100vw, 400px);
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  @media only screen and (max-width: ${mobileBreakdown}) {
    width: calc(100vw - 40px);
    flex-direction: column;
  }
`;

export const EducatorImage = styled.img`
  object-fit: cover;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  box-sizing: border-box;
  margin-top: 20px;

  @media only screen and (max-width: ${tabletBreakDown}) {
    width: 150px;
    height: 150px;
    margin-top: 0;
  }
`

export const EducatorContent = styled.div`
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
    padding: 30px 0 0;
  }

  @media only screen and (max-width: ${mobileBreakdown}) {
    margin-left: 0;
    padding: 30px 0 0;
  }
`;

export const EducatorTitle = styled.h2`
  font-weight: bold;
  font-size: 36px;

  @media only screen and (max-width: ${mobileBreakdown}) {
    text-align: center;
  }
`;

export const EducatorDescription = styled.p`
  font-size: 18px;
  margin-top: 20px;
  line-height: 1.1;
  font-weight: 200;

  @media only screen and (max-width: ${mobileBreakdown}) {
    text-align: center;
  }
`;

export const EducatorTopInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  box-sizing: border-box;
  font-size: 20px;
  margin-left: 10px;

  @media only screen and (max-width: ${tabletBreakDown}) {
    margin-left: 10px;
  }

  @media only screen and (max-width: ${mobileBreakdown}) {
    width: fit-content;
  }
`

export const EducatorInfo = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  font-size: 20px;
  gap: 20px;
  color: white;
  margin: 30px 0 20px;

  @media only screen and (max-width: ${tabletBreakDown}) {
    margin-top: 0;
  }

  @media only screen and (max-width: ${mobileBreakdown}) {
    width: 100%;
    order: -1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`

export const MoreInfoLink = styled.a`
  font-size: 16px;
  color: ${colors.primary.main};
  margin-left: 10px;
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
  margin-left: 10px;
  border-radius: 15px;
  width: fit-content;
`;
