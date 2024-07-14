import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import TeachersBold from "../../data/fonts/Teachers-Bold.ttf";

export const Container = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 120px;
`;

export const StyledLink = styled(motion(NavLink))`
  padding: 20px 0;
  width: 200px;
  border: none;
  font-size: 28px;
  font-weight: bold;
  font-family: "Raleway", sans-serif;
  color: #fefae3;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 20px;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: #e37f19;
    border-bottom: 2px solid #e37f19;
    border-width: 90%;
  }

  &.active {
    background-color: transparent;
    color: #e37f19;
    border-bottom: 2px solid #e37f19;
    border-width: 90%;
  }
`;

export const SliderMenuTitle = styled.h2`
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

export const WhiteBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: 0;
  margin-top: 500px;
  background-color: white;
  z-index: -1;
`;

export const InformativeBlock = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
`;
