import { Button, Container, Title } from "./CartEmpty.styled";

const CartEmpty = ({ handleCloseButton }) => {
  return (
    <Container>
      <Title>Cart Total: $0.00</Title>
      <Button onClick={() => handleCloseButton()} type="button">
        Close
      </Button>
    </Container>
  );
};

export default CartEmpty;
