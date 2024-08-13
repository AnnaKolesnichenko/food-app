import { Link } from "react-router-dom";
import styled from "styled-components";
import TeachersBold from "../../../data/fonts/Teachers-Bold.ttf";
import { LiaHandPointerSolid } from "react-icons/lia";

export const Backdrop = styled.div`
  opacity: 1;
  background: rgba(46, 47, 66, 0.6);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Modal = styled.div`
  top: 50%;
  width: 50%;
  height: 300px;
  background: #fff;
  padding: 5px;
  border-radius: 15px;
  z-index: 100;
  overflow: hidden;
`;

export const PromoContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 90%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  z-index: 1000;
`;

export const Button = styled.button`
  width: 33px;
  height: 33px;
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid transparent;
  border-radius: 100px;
  cursor: pointer;
  z-index: 10000;
  transition: all ease-in-out 1s;

  svg {
    transition: color 1s ease-in-out;
    cursor: pointer;
  }

  &:hover {
    border: 1px solid orange;
    background-color: orange;
    transform: scale(1.3);

    svg {
      color: white;
    }
  }
`;

export const PromoImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;
  overflow: hidden;
  border-radius: 15px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Adjust the dimness here */
    border-radius: 15px;
    z-index: 1; /* Ensure the overlay is above the image */
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(1px);
  position: relative;
  z-index: 0; /* Ensure the image is below the overlay */
`;

export const PromoTitle = styled.h2`
  font-size: 20px;
  color: #fefae3;
  font-family: "Teachers", sans-serif;
  font-size: 20px;
`;

export const PromoLink = styled(Link)`
  font-size: 22px;
  color: #edcf3b;
  text-decoration: none;
`;

export const PromoAbout = styled.p`
  color: #fefae3;
  font-size: 14px;
  font-family: "Teachers", sans-serif;

  @font-face {
    font-family: "Teachers";
    src: url(${TeachersBold}) format("ttf");
    font-weight: bold;
    font-style: normal;
  }
`;

export const PromoTime = styled.p`
  color: #fefae3;
  font-size: 14px;
  font-family: "Teachers", sans-serif;

  @font-face {
    font-family: "Teachers";
    src: url(${TeachersBold}) format("ttf");
    font-weight: bold;
    font-style: normal;
  }

  span {
    color: coral;
  }
`;

export const PromoDealsLink = styled(Link)`
  align-self: flex-end;
  font-size: 22px;
  color: #edcf3b;
  text-decoration: none;
  font-family: "Teachers", sans-serif;

  @font-face {
    font-family: "Teachers";
    src: url(${TeachersBold}) format("ttf");
    font-weight: bold;
    font-style: normal;
  }
`;

export const PointerHand = styled(LiaHandPointerSolid)``;
