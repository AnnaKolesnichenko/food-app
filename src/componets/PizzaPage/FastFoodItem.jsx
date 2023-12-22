import { useState, useContext } from "react";
import { CartContext } from "../../store/cart-context";
import {
  Item,
  StyledImage,
  StyledStar,
  StyledInfo,
  Title,
  Price,
  Button,
} from "./FastFoodItem.styled";

const FastFoodItem = ({ item }) => {
  const cartCnxt = useContext(CartContext);
  const [isLiked, setIsLiked] = useState(false);

  const handleLiked = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Item style={{ position: "relative" }}>
      <StyledImage
        src={item.image}
        alt={item.name}
        opacity={isLiked ? "0.5" : "1"}
      />
      <StyledStar
        fillColor={isLiked ? "pink" : "brown"}
        strokeColor={isLiked ? "white" : "green"}
        onClick={handleLiked}
      />
      <StyledInfo>
        <Title>{item.title}</Title>
        <Price>${item.price}</Price>
        <Button
          type="button"
          onClick={() => {
            cartCnxt.addItemToCart(item.id);
          }}
        >
          Order
        </Button>
      </StyledInfo>
    </Item>
  );
};

export default FastFoodItem;
