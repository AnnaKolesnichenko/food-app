import { useContext, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  NavigationContainer,
  StyledNavLink,
  StyledNavLinkMenu,
  Button,
  Header,
} from '../../App.styled';

import Cart from '../Cart/Cart';
import { CartContext } from '../../store/cart-context';
import CheckOut from '../CheckoutPage/CheckOut';
import OrderAccepted from '../UI/OrderAccepted';
import { AiOutlineLike } from 'react-icons/ai';

const HeaderComponent = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderAccepted, setOrderAccepted] = useState(false);
  const cartCnxt = useContext(CartContext);

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
      <div style={{ width: '120px', marginRight: '55px' }}>
        <StyledNavLink to="/">Food Culture</StyledNavLink>
      </div>

      <Header>
        <StyledNavLinkMenu to="/sushi">asian </StyledNavLinkMenu>
        <StyledNavLinkMenu to="/pizza">fast </StyledNavLinkMenu>
        <StyledNavLinkMenu to="/salads">simple </StyledNavLinkMenu>{' '}
        <StyledNavLinkMenu to="/favorites">
          {<AiOutlineLike />}
        </StyledNavLinkMenu>
        <Button
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 500 }}
          onClick={handleCartOpen}
        >
          Cart ({cartCnxt.items.length})
        </Button>
      </Header>
    </NavigationContainer>
  );
};

export default HeaderComponent;
