import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Container = styled.div`
  height: 100vh;
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

export const StyledLink = styled(NavLink)`
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
