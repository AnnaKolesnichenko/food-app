import styled from "styled-components";

export const ArrowDiv = styled.div`
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background-color: rgba(155, 158, 154, 0.3);
  backdrop-filter: blur(2px);
  border-radius: 100px;
  cursor: pointer;
`;
