import { useContext } from 'react';
import { Button } from './CartEmpty.styled';
import { CartContext } from 'store/cart-context';

const CartFilled = ({ totalCost, handleCloseButton, handleCheckOutOpen }) => {
  const cartCntx = useContext(CartContext);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      }}
    >
      <h2 style={{ fontSize: '16px', fontFamily: 'Raleway, sans-serif' }}>
        Cart Total: ${totalCost}
      </h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button
          onClick={handleCheckOutOpen}
          type="button"
          style={{ width: '90px' }}
        >
          Checkout
        </Button>
        <Button
          onClick={() => handleCloseButton()}
          type="button"
          style={{ width: '90px' }}
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default CartFilled;
