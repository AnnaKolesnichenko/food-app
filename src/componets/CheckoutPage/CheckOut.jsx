import { useContext, useEffect, useState } from "react";
import {
  StyledDiv,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSpan,
  StyledSubmitButton,
  StyledTitle,
} from "./CheckOut.styled";

import { CartContext } from "../../store/cart-context";
import { Backdrop, Modal } from "../UI/CommonStyles.styled";

const CheckOut = ({ handleCheckClose }) => {
  const cartCtx = useContext(CartContext);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    let total = 0;
    cartCtx.items.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalCost(total);
  }, [cartCtx.items]);

  const handleSubmit = (e) => {
    e.preventDefault();
    cartCtx.items.length = 0;
    console.log("Done");
    handleCheckClose();
  };

  return (
    <Backdrop>
      <Modal>
        <div>
          <div style={{ marginBottom: "20px" }}>
            <StyledTitle>
              Total amount: <StyledSpan>${totalCost.toFixed(2)}</StyledSpan>
            </StyledTitle>
          </div>
          <StyledForm onSubmit={handleSubmit}>
            <StyledLabel htmlFor="name">Full Name</StyledLabel>
            <StyledInput type="text" id="name" />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <StyledDiv>
                <StyledLabel htmlFor="email">Email Address</StyledLabel>
                <StyledInput type="email" id="email" />
              </StyledDiv>
              <StyledDiv>
                <StyledLabel htmlFor="phone">Phone Number</StyledLabel>
                <StyledInput type="number" id="phone" />
              </StyledDiv>
            </div>
            <StyledLabel htmlFor="street">Street</StyledLabel>
            <StyledInput type="text" id="street" />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <StyledDiv>
                <StyledLabel htmlFor="postal">Postal Code</StyledLabel>
                <StyledInput type="number" id="postal" />
              </StyledDiv>
              <StyledDiv>
                <StyledLabel htmlFor="city">City</StyledLabel>
                <StyledInput type="text" id="city" />
              </StyledDiv>
            </div>
          </StyledForm>
          <StyledSubmitButton onClick={handleSubmit}>Submit</StyledSubmitButton>
        </div>
      </Modal>
    </Backdrop>
  );
};

export default CheckOut;
