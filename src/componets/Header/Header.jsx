import { useContext, useEffect, useState } from 'react';
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

import { AnimatePresence } from 'framer-motion';

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

  useEffect(() => {
    let timeout;
    if (orderAccepted) {
      timeout = setTimeout(() => {
        setOrderAccepted(false);
      }, 3000);

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
      {checkoutOpen && <CheckOut handleCheckClose={handleCheckClose} />}
      {orderAccepted && <OrderAccepted />}
      <div style={{ width: '120px', marginRight: '55px' }}>
        <StyledNavLink to="/">Food Culture</StyledNavLink>
      </div>

      <Header>
        <StyledNavLinkMenu to="/sushi">asian food</StyledNavLinkMenu>
        <StyledNavLinkMenu to="/pizza">fast food</StyledNavLinkMenu>
        <StyledNavLinkMenu to="/salads">simple food</StyledNavLinkMenu>{' '}
        <Button onClick={handleCartOpen}>Cart ({cartCnxt.items.length})</Button>
      </Header>
    </NavigationContainer>
  );
};

export default HeaderComponent;
