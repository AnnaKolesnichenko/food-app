import styled from "styled-components";

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
  display: flex;
  flex-direction: row;
  padding: 20px;
  border-radius: 15px;
  z-index: 100;
  overflow: auto;
  //transition: opacity 250ms ease-in-out;
`;

export const PromoContent = styled.div`
  position: relative;
  width: 40%;
`;

export const Button = styled.div`
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

  transition: all ease-in-out 1s;

  svg {
    transition: color 1s ease-in-out; /* Ensure the icon color transition is applied both on hover and unhover */
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
  width: 60%;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;
