import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;
const ScoreContainer = styled.div`
  max-width: 200px;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
  @media (max-width: 426px) {
    h1 {
      font-size: 50px; /* Responsive font size */
    }

    p {
      font-size: 12px; /* Responsive font size */
    }
  }
`;
