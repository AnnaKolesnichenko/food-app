import styled from "styled-components";
import Teachers from "../../../data/fonts/Teachers-Bold.ttf";

export const SubscrContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
  /* margin-bottom: -50px; */
`;

export const SubscrTitle = styled.p`
  color: white;
  font-family: "Teachers", sans-serif;
  font-size: 20px;
  letter-spacing: 1px;

  @font-face {
    font-family: "Teachers";
    src: url(${Teachers}) format("ttf");
    font-weight: bold;
    font-style: normal;
  }
`;

export const SubscrForm = styled.form`
  display: flex;
  flex-direction: row;
  width: 85%;
`;

export const SubscrInput = styled.input`
  width: 55%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 9px;
  border: none;
  border-radius: 10px 0 0 10px;
  cursor: pointer;
`;

export const SubscrBtn = styled.button`
  width: 45%;
  padding: 9px;
  border: none;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
`;
