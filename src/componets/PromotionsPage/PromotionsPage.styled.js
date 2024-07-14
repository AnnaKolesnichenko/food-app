import styled from "styled-components";
import TeachersBold from "../../data/fonts/Teachers-Bold.ttf";

export const Deals = styled.div``;

export const MainDealsTitle = styled.h2`
  color: white;

  font-family: "Teachers", sans-serif;
  font-size: 32px;

  @font-face {
    font-family: "Teachers";
    src: url(${TeachersBold}) format("ttf");
    font-weight: bold;
    font-style: normal;
  }
`;

export const Background = styled.div`
  position: relative;
  width: 100%;
  background-color: grey;
`;

export const BackImage = styled.img`
  filter: blur(2px);
  width: 100%;
  height: 500px;
`;

export const DealAbout = styled.div`
  position: absolute;
  top: 30px;
  right: 50px;
`;

export const DealsTitle = styled.h3`
  color: white;
`;

export const DealsAbout = styled.p``;
