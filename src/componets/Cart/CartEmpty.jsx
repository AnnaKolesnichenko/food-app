import { Button } from "componets/UI/CommonStyles.styled";
import { Container, Title } from "./CartEmpty.styled";
import { motion } from "framer-motion";

const CartEmpty = ({ handleCloseButton }) => {
  return (
    <Container>
      <Title>Cart Total: $0.00</Title>
      <Button
        as={motion.button}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 500 }}
        onClick={() => handleCloseButton()}
        type="button"
      >
        Close
      </Button>
    </Container>
  );
};

export default CartEmpty;
