import { useEffect, useRef, useState } from "react";

import { Backdrop, Button, Modal } from "../UI/CommonStyles.styled";
import {
  StyledDiv,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSpan,
  StyledTitle,
} from "./CheckOut.styled";

import bg from "../../data/assets/b.jpeg";
import { motion, useAnimate, stagger } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "store/cart-slice";
//import { Link } from 'react-router-dom';

const CheckOut = ({ handleCheckClose, handleCheckCloseCancelled }) => {
  // const cartCtx = useContext(CartContext);
  const [totalCost, setTotalCost] = useState(0);
  const [scope, animate] = useAnimate();

  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const name = useRef();
  const email = useRef();
  const phone = useRef();
  const street = useRef();
  const city = useRef();

  useEffect(() => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalCost(total);
  }, [items]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value,
      street: street.current.value,
      city: city.current.value,
    };

    if (
      !userData.name.trim() ||
      !userData.email.trim() ||
      !userData.phone.trim() ||
      !userData.street.trim() ||
      !userData.city.trim()
    ) {
      console.log("invalid data");
      animate(
        "input",
        { x: [-3, -1, 0, 1, 3, 0] },
        { type: "spring", duration: 0.1, delay: stagger(0.01) }
      );
      return;
    }
    console.log("SUCCESS");

    dispatch(clearCart());
    console.log("Done");
    handleCheckClose();
  };

  return (
    <Backdrop>
      <Modal
        as={motion.div}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div>
          <div style={{ marginBottom: "20px" }}>
            <StyledTitle>
              Total amount: <StyledSpan>${totalCost.toFixed(2)}</StyledSpan>
            </StyledTitle>
          </div>
          <StyledForm onSubmit={handleSubmit} ref={scope}>
            <StyledLabel htmlFor="name">Full Name</StyledLabel>
            <StyledInput ref={name} type="text" id="name" />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <StyledDiv>
                <StyledLabel htmlFor="email">Email Address</StyledLabel>
                <StyledInput ref={email} type="email" id="email" />
              </StyledDiv>
              <StyledDiv>
                <StyledLabel htmlFor="phone">Phone Number</StyledLabel>
                <StyledInput ref={phone} type="number" id="phone" />
              </StyledDiv>
            </div>
            <StyledLabel htmlFor="street">Street</StyledLabel>
            <StyledInput ref={street} type="text" id="street" />
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
                <StyledInput ref={city} type="text" id="city" />
              </StyledDiv>
            </div>
          </StyledForm>
          <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
            <Button
              type="button"
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 500 }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button
              type="button"
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 500 }}
              onClick={handleCheckCloseCancelled}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </Backdrop>
  );
};

export default CheckOut;
