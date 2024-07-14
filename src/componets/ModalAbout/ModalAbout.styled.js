import styled from "styled-components";
import { IoCloseCircleOutline } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";

export const Image = styled.img`
  width: 50%;
  height: 750px;
  border-radius: 4px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
`;

export const ImageDescription = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const AboutItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutTitle = styled.h3`
  margin-bottom: 5px;
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  font-weight: 700;
`;

export const AboutPrice = styled.span`
  margin-bottom: 5px;
  font-family: "Raleway", sans-serif;
  font-size: 18px;
  font-weight: 400;
`;

export const AboutSpan = styled.span`
  margin-top: 20px;
  margin-bottom: 3px;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
`;

export const AboutDetailsSpan = styled.span`
  margin-top: 2px;
  margin-bottom: 3px;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  font-weight: 600;
`;

export const AboutDescription = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 400;
`;

export const ButtonsStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 25px;
`;

export const IconStyled = styled(IoCloseCircleOutline)`
  width: 30px;
  height: auto;
  transition: transform 0.3s ease-in;

  &:hover {
    stroke: red;
    transform: scale(1.2);
  }
`;

export const CartStyled = styled(BsCart4)`
  width: 30px;
  height: auto;
  transition: transform 0.3s ease-in;
  &:hover {
    fill: green;
    transform: scale(1.2);
  }
`;

export const LikedStyled = styled(AiOutlineLike)`
  width: 30px;
  height: auto;
  transition: transform 0.3s ease-in;
  &:hover {
    fill: coral;
    transform: scale(1.2);
  }
`;
