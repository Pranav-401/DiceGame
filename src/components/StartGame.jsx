import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container className="container">
      <div>
        <img src="/images/dices.png" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;
const Container = styled.div`
  display: flex;
  height: 100vh;
  max-width: 1180px;
  margin: 0 auto;
  align-items: center;
  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }

  /* Tablet View */
  @media (max-width: 768px) {
    margin-top: 50px;
    flex-direction: column; /* Stack content vertically */
    justify-content: flex-start;
    text-align: center; /* Center text for a cleaner look */
    img {
      height: 200px;
    }
    .content h1 {
      font-size: 72px; /* Smaller font size for smaller screens */
    }
  }

  /* Mobile View */
  @media (max-width: 425px) {
    margin-top: 50px; /* Reduced margin for mobile */
    flex-direction: column;
    text-align: center;

    .content h1 {
      font-size: 48px; /* Even smaller font size for mobile */
    }

    img {
      width: 100px; /* Resize image for mobile */
    }
  }
  @media (max-width: 430px) {
    img {
      width: 200px; /* Resize image for mobile */
    }
  }
`;
