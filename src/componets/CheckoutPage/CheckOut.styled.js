import styled from "styled-components";

// export const Backdrop = styled.div`
//   position: fixed;
//   height: 100vh;
//   width: 100vw;
//   top: 0;
//   left: 0;
//   /* margin: auto; */
//   opacity: 1;
//   background: rgba(46, 47, 66, 0.6);
//   transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   z-index: 1;
// `;

// export const Modal = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 450px;
//   background: #fff;
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   border-radius: 7px;
//   z-index: 100;
// `;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: #e37f19;
  margin: 0;
  margin-bottom: 10px;
  font-family: "Raleway", sans-serif;
`;

export const StyledSpan = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #e37f19;
`;

export const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 400;
  color: grey;
  margin-bottom: 5px;
  font-family: "Raleway", sans-serif;
`;

export const StyledInput = styled.input`
  margin-bottom: 15px;
  padding: 7px 5px;
  box-sizing: border-box;
  //width: 200px;

  border-radius: 7px;
  border: 1px solid #ede9e6;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: calc((100% - 20px) / 2);
`;

export const StyledSubmitButton = styled.button`
  box-sizing: border-box;
  padding: 7px 15px;
  margin-top: 10px;
  border: 1.5px solid #ede9e6;
  background-color: transparent;
  border-radius: 7px;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  font-weight: 600;
  width: 215px;
  color: grey;

  &:hover {
    border-radius: 0px 0px 0px 0px;
    background-color: transparent;
    border: 1.5px solid transparent;
    border-bottom: 1.5px solid #e37f19;
    color: #e37f19;
  }
`;
// .backdrop {
//     position: fixed;
//     height: 677px;
//     width: 100vw;
//     top: 0;
//     left: 0;
//     margin: auto;
//     opacity: 1;
//     background: rgba(46, 47, 66, .4);

//     transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
// }

// .backdrop.is-hidden {
//     opacity: 0;
//     pointer-events: none;
// }

// .backdrop.backdrop.is-hidden .modal {
//     transform: translate(-50%) scale(0.5);
// }

// .modal {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     width: 408px;
//     padding:72px 24px 24px 24px;

//     background-color: #fcfcfc;
//     transform: translate(-50%, -50%) scale(1);
//     border-radius: 4px;
//     box-shadow: 0px 1px 1px rgba(0,0,0, .14),
//                 0px 1px 3px rgba(0,0,0, .12),
//                 0px 2px 1px rgba(0,0,0,.2);
// }
