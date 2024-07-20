import { useEffect, useState } from "react";
import { Backdrop, Modal } from "../UI/CommonStyles.styled";
import CartEmpty from "./CartEmpty";
import CartFilled from "./CartFilled";

import bg from "../../data/assets/b.jpeg";
import CartItems from "../CartItems/CartItems";

import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Cart = ({ handleCloseButton, handleCheckOutOpen }) => {
  //const shopCnxt = useContext(CartContext);
  const [totalCost, setTotalCost] = useState(0);
  const items = useSelector((state) => state.cart.items);

  useEffect(() => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalCost(total);
  }, [items]);

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
          <h1
            style={{
              fontFamily: "Raleway, sans-serif",
              marginBottom: "5px",
              marginTop: "10px",
            }}
          >
            Your Cart
          </h1>
          <div>
            {items.length > 0 ? <CartItems /> : <p>Your Cart is Empty!</p>}
            {/* {quantity >= 2 && <p>Coke is added</p>}
            {quantity >= 4 && <p>Best rolls set is added</p>} */}
          </div>
        </div>
        <div>
          {items.length === 0 ? (
            <CartEmpty handleCloseButton={handleCloseButton} />
          ) : (
            <CartFilled
              handleCloseButton={handleCloseButton}
              totalCost={totalCost.toFixed(2)}
              handleCheckOutOpen={handleCheckOutOpen}
            />
          )}
          {/* <button onClick={handleCloseButton}>Close</button> */}
        </div>
      </Modal>
    </Backdrop>
  );
};

export default Cart;
