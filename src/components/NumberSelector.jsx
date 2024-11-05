import styled from "styled-components";

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const numberSelectorHandler = (value) => {
    setSelectNumber(value);
    setError("");
  };
  console.log(selectedNumber);
  return (
    <NumberSelectorContainer>
      <p
        className="
      error"
      >
        {error}
      </p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isselected={value === selectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
  .error {
    color: red;
  }
  @media (max-width: 426px) {
    .flex {
      gap: 14px;
    }
  }
  @media (max-width: 320px) {
    .flex {
      gap: 7px;
    }
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (!props.isselected ? "black" : "white")};

  @media (max-width: 426px) {
    height: 36px;
    width: 36px;
    font-size: 12px;
  }
`;
