import styled from "styled-components";

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
`;

export const TitleItems = styled.h2`
  font-size: 16px;
  font-family: "Raleway", sans-serif;
`;

export const ButtonGroup = styled.div``;

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  background-color: #e0d9d9;
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: bold;
  font-family: "Raleway", sans-serif;

  &:hover {
    border-radius: 0px 0px 0px 0px;
    background-color: transparent;
    border-bottom: 2px solid #e37f19;
    color: #e37f19;
  }
`;
