import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  /* margin: auto; */
  opacity: 1;
  background: rgba(46, 47, 66, 0.6);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 4px;
  z-index: 100;
  transition: opacity 250ms ease-in-out;
`;
