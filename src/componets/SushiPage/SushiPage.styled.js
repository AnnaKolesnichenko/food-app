import styled from 'styled-components';
// import { FaRegStar } from "react-icons/fa";
import { AiOutlineHeart } from 'react-icons/ai';

export const Container = styled.div`
  width: 100%;
`;

export const ListItems = styled.ul`
  padding: 0;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const Item = styled.li`
  width: 240px;
  height: auto;
  list-style: none;
  /* margin-bottom: 10px; */
  border-radius: 10px;
  /* border: 1px solid #b9b9b9; */
  background-color: transparent;
`;

export const Selected = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 30px;
  justify-content: flex-start;
`;

export const StyledImage = styled.img.attrs(props => ({
  style: {
    opacity: props.opacity || 1,
    display: 'block',
    width: '240px',
    height: '300px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '10px 10px 0px 0px',
  },
}))``;
//`
//   display: block;
//   width: 200px;
//   height: 250px;
//   margin-left: auto;
//   margin-right: auto;
//   border-radius: 10px 10px 10px 10px;
// `;

export const StyledInfo = styled.div`
  padding: 15px;
  text-align: center;
  background-color: #050401;
  border-radius: 0px 0px 10px 10px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-family: 'Raleway', sans-serif;
  color: #d5cfc7;
  margin: 0;
  margin-bottom: 12px;
`;

export const Price = styled.p`
  width: 70px;
  padding: 7px 5px;
  margin: 20px auto;
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
  letter-spacing: 1px;
  margin-bottom: 7px;
  color: #e37f19;
  background-color: #2d2714;
  border-radius: 7px;
`;

export const Button = styled.button`
  width: 40%;
  margin-top: 10px;
  border: none;
  padding: 10px 7px;
  border-radius: 7px;
  font-size: 12 4px;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  letter-spacing: 1px;
  background-color: #d5cfc7;
  color: #3a2a21;
  cursor: pointer;

  &:hover {
    background-color: #e37f19;
    color: #d5cfc7;
    /* color: #d5cfc7;
    background-color: #3a2a21; */
    /* #3A2A21
    #D5CFC7 */
  }
`;

export const StyledStar = styled(AiOutlineHeart).attrs(props => ({
  style: {
    position: 'absolute',
    top: '10px',
    right: '15px',
    width: '30px',
    height: '30px',
    fill: props.fillColor || 'red',
    stroke: props.strokeColor || 'red',
  },
}))``;
