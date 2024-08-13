import styled from "styled-components";
// import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import TeachersBold from "../../../data/fonts/Teachers-Bold.ttf";

export const DealsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid grey;
  border-radius: 100px;
  overflow: hidden;
`;

export const DealsTitle = styled.h2`
  margin: 0;
  margin-top: 40px;
  margin-left: 20px;
  margin-bottom: 20px;
  color: grey;
  font-family: "Teachers", sans-serif;
  font-size: 26px;

  @font-face {
    font-family: "Teachers";
    src: url(${TeachersBold}) format("ttf");
    font-weight: bold;
    font-style: normal;
  }
`;

// export const CircleOne = styled.div`
//   position: absolute;
//   top: -60px;
//   left: -105px;
//   width: 150px;
//   height: 150px;
//   background-color: yellow;
//   border-radius: 100px;
// `;

// export const CircleTwo = styled.div`
//   position: absolute;
//   top: 80px;
//   right: 55px;
//   width: 150px;
//   height: 150px;
//   background-color: green;
//   border-radius: 100px;
// `;

// export const CircleThree = styled.div`
//   position: absolute;
//   bottom: 30px;
//   right: -15px;
//   width: 120px;
//   height: 120px;
//   background-color: pink;
//   border-radius: 100px;
// `;

export const DealsImage = styled.img`
  width: 400px;
  height: auto;
  margin-right: 10px;
  border-radius: 20px;
  cursor: pointer;
`;

export const GreenArrow = styled.img`
  width: 380px;
  height: auto;
  fill: grey;

  /* transform: rotate(90deg); */
  filter: blur(2px);
  transition: all 1s;

  &:hover {
    fill: green;
    opacity: 1;
    filter: blur(0px);
  }
`;
