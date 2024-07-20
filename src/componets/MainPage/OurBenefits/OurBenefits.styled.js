import styled from "styled-components";
import TeachersMedium from "../../../data/fonts/Teachers-Medium.ttf";
import TeachersBold from "../../../data/fonts/Teachers-Bold.ttf";

export const WhyUsParag = styled.p`
  margin: 0;
  margin-left: 20px;
  margin-bottom: 20px;
  margin-top: 60px;
  color: grey;
  font-family: "Teachers", sans-serif;
  font-size: 30px;
  font-weight: 600;
  text-transform: capitalize;

  @font-face {
    font-family: "Teachers";
    src: url(${TeachersBold}) format("ttf");
    font-weight: 600;
    font-style: normal;
  }
`;

export const BenefitsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  border: 1px solid grey;
  border-radius: 100px;
  overflow: hidden;
`;

export const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  gap: 15px;
  /* width: 90%; */
  /* margin-bottom: 80px; */
`;

export const BenefitItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 10px;
  width: calc((100% - 30px) / 4);
  height: 250px;
  overflow: hidden;
  border-radius: 50px;
  /* border-radius: 16px;
  box-shadow: 2px 3px 5px 6px rgba(198, 198, 196, 0.3); */
  background-color: white;
  transition: all ease-in-out 2s;
  cursor: pointer;

  &:hover {
    background-color: pink;
    transform: background-color;
    transform: scale(1.1);
  }
`;

export const BenefitP = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  color: grey;
  font-family: "Teachers", sans-serif;
  font-size: 18px;
  z-index: 1000;

  @font-face {
    font-family: "Teachers";
    src: url(${TeachersMedium}) format("woff");
    font-weight: medium;
    font-style: normal;
  }
`;

export const BenefitImg = styled.img`
  border-radius: 16px;
  width: 130px;
  height: 130px;
  z-index: 1000;
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
