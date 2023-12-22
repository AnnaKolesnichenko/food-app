import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const ContainerMain = styled.div`
  max-width: 1024px;
  padding: 0 36px;
  margin-left: auto;
  margin-right: auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 20px;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 0;
`;

export const StyledNavLinkMenu = styled(NavLink)`
  text-decoration: none;
  color: #fefae3;
  font-size: 12px;
  font-weight: bold;
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding-top: 7px;
  border-top: 2px solid transparent;
  box-sizing: border-box;

  &:hover {
    color: #e37f19;
    border-top-color: #e37f19;
  }

  &.active {
    color: #e37f19;
    border-top-color: #e37f19;
  }
`;

export const StyledNavLink = styled(Link)`
  text-decoration: none;
  width: 50px;
  color: #fefae3;
  font-size: 24px;
  font-weight: bold;
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  letter-spacing: 10px;
  padding-top: 7px;
  margin-right: 25px;
  margin-left: 0;

  &:hover {
    color: #e37f19;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  /* border: 0.2px solid #e37f19;
  border-radius: 15px; */
  height: fit-content;
  border: none;
  padding: 0px;
  padding-top: 7px;
  color: #fefae3;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;

  border-top: 2px solid transparent;
  box-sizing: border-box;

  &:hover {
    color: #e37f19;
    border-top-color: #e37f19;
  }
`;
