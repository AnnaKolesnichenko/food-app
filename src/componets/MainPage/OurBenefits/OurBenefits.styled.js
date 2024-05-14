import styled from "styled-components";
import TeachersMedium from "../../../data/fonts/Teachers-Medium.ttf";
import TeachersBold from "../../../data/fonts/Teachers-Bold.ttf";

export const WhyUsParag = styled.p`
  margin: 0;
  margin-left: 20px;
  margin-bottom: 20px;
  margin-top: 100px;
  color: grey;
  font-family: "Teachers", sans-serif;
  font-size: 26px;
  font-weight: 600;
  text-transform: capitalize;

  @font-face {
    font-family: "Teachers";
    src: url(${TeachersBold}) format("ttf");
    font-weight: 600;
    font-style: normal;
  }
`;

export const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 80px;
`;

export const BenefitItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px;
  width: calc((100% - 30px) / 4);
  height: 200px;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 2px 3px 5px 6px rgba(198, 198, 196, 0.3);
  background-color: white;
`;

export const BenefitP = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  color: grey;
  font-family: "Teachers", sans-serif;
  font-size: 16px;

  @font-face {
    font-family: "Teachers";
    src: url(${TeachersMedium}) format("woff");
    font-weight: medium;
    font-style: normal;
  }
`;

export const BenefitImg = styled.img`
  border-radius: 16px;
  width: 100px;
  height: 100px;
`;

export const Decorate = styled.div`
  position: absolute;
  bottom: 50px;
  left: -150px;
  width: 100%;
  height: 500px;
  background-color: green;

  opacity: 0.3;
  z-index: 0;
`;
