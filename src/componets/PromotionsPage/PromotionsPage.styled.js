import styled from "styled-components";
import TeachersBold from "../../data/fonts/Teachers-Bold.ttf";

export const Deals = styled.div``;

export const MainDealsTitle = styled.h2`
  color: #e37f19;
  font-family: "Teachers", sans-serif;
  font-size: 32px;

  @font-face {
    font-family: "Teachers";
    src: url(${TeachersBold}) format("ttf");
    font-weight: bold;
    font-style: normal;
  }
`;

export const DealsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
`;

export const DealArrow = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(155, 158, 154, 0.5);
  backdrop-filter: blur(2px);
  padding: 0 15px;
  border-radius: 8px;
  opacity: 0;
  transform: translateX(-40px);
  transition: all 0.5s;
`;

export const DealAbout = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 45%;
  background-color: rgba(155, 158, 154, 0.5);
  backdrop-filter: blur(10px);
  padding: 10px;
  border-radius: 8px;
  /* opacity: 0;
  transition: opacity 0.6s; */
`;

export const Background = styled.li`
  position: relative;
  width: calc((100% - 30px) / 2);
  height: 350px;
  margin-bottom: 20px;
  background-color: grey;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;

  /* &:hover ${DealAbout} {
    opacity: 1;
  } */

  &:hover ${DealArrow} {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const BackImage = styled.img`
  display: block;
  /* filter: blur(5px); */
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-size: cover;
  object-fit: cover;
  object-position: center;
`;

export const DealsTitle = styled.h3`
  color: white;
  font-family: "Teachers", sans-serif;
  font-size: 22px;

  @font-face {
    font-family: "Teachers";
    src: url(${TeachersBold}) format("ttf");
    font-weight: bold;
    font-style: normal;
  }
`;

export const DealsDescr = styled.p`
  color: white;
  font-family: "Teachers", sans-serif;
  font-size: 16px;

  @font-face {
    font-family: "Teachers";
    src: url(${TeachersBold}) format("ttf");
    font-weight: bold;
    font-style: normal;
  }
`;
