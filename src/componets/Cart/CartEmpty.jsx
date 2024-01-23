import { motion } from 'framer-motion';
import { Button, Container, Title } from './CartEmpty.styled';

const CartEmpty = ({ handleCloseButton }) => {
  return (
    <Container>
      <Title
      // as={motion.h2}
      // variants={{ hidden: { color: 'red' }, visible: { color: 'black' } }}
      // transition={{ duration: 0.5 }}
      //exit={opacity: 1, y: 0 } -- but not use variant names on the exit on the child
      >
        Cart Total: $0.00
      </Title>
      <Button onClick={() => handleCloseButton()} type="button">
        Close
      </Button>
    </Container>
  );
};

export default CartEmpty;
