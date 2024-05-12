import styled from "styled-components";
import TeachersBold from "../../../data/fonts/Teachers-Bold.ttf";

export const SliderContainer = styled.div`
  margin-top: 10px;
  background-color: #1c180a;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 80px;
`;

export const SliderItem = styled.div`
  width: 100%;
  height: 220px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  margin-right: auto;
  margin-left: auto;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 95%;
    height: 40%;
    border-radius: 16px;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    z-index: 1;
  }
`;

export const SliderImage = styled.img`
  border-radius: 16px;
  width: 100%;
  height: 220px;

  &:hover {
    transform: scale(1.1);
  }
`;

export const SliderText = styled.h3`
  text-align: center;
  position: absolute;
  bottom: 10px;
  color: white;
  font-family: "Teachers", sans-serif;
  z-index: 10;

  @font-face {
    font-family: "Teachers";
    src: url(${TeachersBold}) format("ttf");
    font-weight: bold;
    font-style: normal;
  }
`;
