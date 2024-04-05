import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  NavigationContainer,
  StyledNavLink,
  StyledNavLinkMenu,
  Button,
  Header,
} from "../../App.styled";

import Cart from "../Cart/Cart";
import CheckOut from "../CheckoutPage/CheckOut";
import OrderAccepted from "../UI/OrderAccepted";
import { AiOutlineLike } from "react-icons/ai";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderAccepted, setOrderAccepted] = useState(false);
  const items = useSelector((state) => state.cart.items);

  const handleCartOpen = () => {
    setCartOpen(!cartOpen);
  };

  const handleCloseButton = () => {
    setCartOpen(!cartOpen);
  };

  const handleCheckOutOpen = () => {
    setCartOpen(!cartOpen);
    setCheckoutOpen(true);
  };

  const handleCheckClose = () => {
    setCheckoutOpen(false);
    setOrderAccepted(true);
  };

  const handleCheckCloseCancelled = () => {
    setCheckoutOpen(false);
    setOrderAccepted(false);
  };

  useEffect(() => {
    let timeout;
    if (orderAccepted) {
      timeout = setTimeout(() => {
        setOrderAccepted(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [orderAccepted]);

  return (
    <NavigationContainer>
      <AnimatePresence>
        {cartOpen && (
          <Cart
            handleCloseButton={handleCloseButton}
            handleCheckOutOpen={handleCheckOutOpen}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {checkoutOpen && (
          <CheckOut
            handleCheckClose={handleCheckClose}
            handleCheckCloseCancelled={handleCheckCloseCancelled}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>{orderAccepted && <OrderAccepted />}</AnimatePresence>
      <div style={{ width: "120px", marginRight: "55px" }}>
        <StyledNavLink to="/">Food Culture</StyledNavLink>
      </div>

      <AnimatePresence>
        <Header>
          <StyledNavLinkMenu
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500, bounce: 0.5 }}
            to="/sushi"
          >
            asian{" "}
          </StyledNavLinkMenu>
          <StyledNavLinkMenu
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500 }}
            to="/pizza"
          >
            fast{" "}
          </StyledNavLinkMenu>
          <StyledNavLinkMenu
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500 }}
            to="/salads"
          >
            simple{" "}
          </StyledNavLinkMenu>{" "}
          <StyledNavLinkMenu
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500 }}
            to="/favorites"
          >
            {<AiOutlineLike />}
          </StyledNavLinkMenu>
          <Button
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500 }}
            onClick={handleCartOpen}
          >
            Cart ({items.length})
          </Button>
        </Header>
      </AnimatePresence>
    </NavigationContainer>
  );
};

export default HeaderComponent;
