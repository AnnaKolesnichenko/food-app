import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../store/cart-context';
import { Backdrop, Button, Modal } from '../UI/CommonStyles.styled';
import {
  StyledDiv,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSpan,
  StyledTitle,
} from './CheckOut.styled';

import bg from '../../data/assets/b.jpeg';
import { motion } from 'framer-motion';
//import { Link } from 'react-router-dom';

const CheckOut = ({ handleCheckClose, handleCheckCloseCancelled }) => {
  const cartCtx = useContext(CartContext);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    let total = 0;
    cartCtx.items.forEach(item => {
      total += item.price * item.quantity;
    });
    setTotalCost(total);
  }, [cartCtx.items]);

  const handleSubmit = e => {
    e.preventDefault();
    cartCtx.items.length = 0;
    console.log('Done');
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
        transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div>
          <div style={{ marginBottom: '20px' }}>
            <StyledTitle>
              Total amount: <StyledSpan>${totalCost.toFixed(2)}</StyledSpan>
            </StyledTitle>
          </div>
          <StyledForm onSubmit={handleSubmit}>
            <StyledLabel htmlFor="name">Full Name</StyledLabel>
            <StyledInput type="text" id="name" />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
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
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
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
          <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
            <Button
              type="button"
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 500 }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button
              type="button"
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 500 }}
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
