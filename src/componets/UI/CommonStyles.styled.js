import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  /* margin: auto; */
  opacity: 1;
  background: rgba(46, 47, 66, 0.6);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
`;

export const Modal = styled.div`
  top: 50%;
  width: 70%;
  height: 50%;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 4px;
  z-index: 100;
  //transition: opacity 250ms ease-in-out;
`;

export const Button = styled.button`
  //width: 40%;
  margin-top: 5px;
  border: none;
  padding: 5px 15px;
  border-radius: 7px;
  font-size: 12 4px;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  letter-spacing: 0.4px;
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
