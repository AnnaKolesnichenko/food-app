import styled from "styled-components";

export const SliderContainer = styled.div`
  margin-top: 10px;
  background-color: white;
  width: 95%;
  margin-right: auto;
  margin-left: auto;
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
`;

export const SliderImage = styled.img`
  border-radius: 16px;
  width: 100%;

  &:hover {
    transform: scale(1.1);
  }
`;

export const SliderText = styled.h3`
  text-align: center;
  position: absolute;
  bottom: 10px;
  color: white;
`;
