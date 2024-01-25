import { Button } from 'componets/UI/CommonStyles.styled';
import { motion } from 'framer-motion';

const CartFilled = ({ totalCost, handleCloseButton, handleCheckOutOpen }) => {
  //const cartCntx = useContext(CartContext);
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
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 500 }}
          onClick={handleCheckOutOpen}
          type="button"
          // style={{ width: '90px' }}
        >
          Checkout
        </Button>
        <Button
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 500 }}
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
