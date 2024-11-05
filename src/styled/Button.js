import styled from "styled-components";

export const Button = styled.button`
  padding: 0px 18px;
  height: 44px;
  background: #000000;
  color: white;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 2px solid transparent;
  transition: 0.4s background ease-in;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 2px solid black;
    transition: 0.3s background ease-in;
  }
`;
export const OutlineButton = styled(Button)`
  color: black;
  background-color: white;
  border: 2px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: 2px solid transparent;
  }
`;
