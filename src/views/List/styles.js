import styled from 'styled-components';

export const EducatorsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1060px;
  gap: 20px;
  margin: 25px auto;

  @media only screen and (max-width: 1059px) {
    width: 790px;
  }

  @media only screen and (max-width: 789px) {
    width: 520px;
  }

  @media only screen and (max-width: 519px) {
    width: 250px;
  }
`
