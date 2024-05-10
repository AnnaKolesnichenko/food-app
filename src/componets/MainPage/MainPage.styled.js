import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const Container = styled.div`
  height: 900px;
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
  margin-top: 60px;
  margin-left: 40px;
  color: grey;
  font-family: "Raleway", sans-serif;
  font-size: 20px;
`;

export const WhiteBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: 0;
  margin-top: 900px;
  background-color: white;
`;

export const InformativeBlock = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  width: 1024px;
  margin-left: auto;
  margin-right: auto;
`;
