import styled from "styled-components";
import { ImFire } from "react-icons/im";
import TeachersBold from "../../../data/fonts/Teachers-Bold.ttf";

export const HotTitle = styled.h2`
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

export const HotImage = styled.img`
  width: 100%;
  height: 390px;
  border-radius: 30px;
`;

export const HotsIcon = styled.img`
  width: 100px;
  height: 100px;
  z-index: 1000;
  background-color: transparent;
  position: absolute;
  top: -30px;
  left: -30px;
`;

export const Fire = styled(ImFire)`
  width: 120px;
  height: 120px;
  z-index: 1000;
  fill: #32cd32;
  position: absolute;
  top: -30px;
  left: -30px;
  transform: rotate(-30deg);
  opacity: 0.8;
`;

// export const HotsContainer = styled.div`
//   position: absolute;
//   top: -30px;
//   left: -30px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 50px;
//   border-radius: 100%;
//   background-color: yellow;
//   opacity: 0.3;
// `;

export const HotsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 65px;
`;

export const HotsItem = styled.div`
  width: calc((100% - 30px) / 3);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HotText = styled.p`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-family: "Teachers", sans-serif;
  color: white;
  font-size: 18px;

  @font-face {
    font-family: "Teachers";
    src: url(${TeachersBold}) format("ttf");
    font-weight: bold;
    font-style: normal;
  }
`;
