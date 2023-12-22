import React, { useContext, useState } from "react";
import {
  Button,
  Item,
  Price,
  StyledImage,
  StyledInfo,
  StyledStar,
  Title,
} from "./SushiPage.styled";

import { CartContext } from "../../store/cart-context";

const FoodItem = ({ item }) => {
  const cartCnxt = useContext(CartContext);
  const [isLiked, setIsLiked] = useState(false);

  const handleLiked = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Item style={{ position: "relative" }}>
      <StyledImage
        src={item.image}
        alt={item.title}
        opacity={isLiked ? "0.5" : "1"}
      />
      {/* <FaRegStar style={{ position: "absolute", top: "10px", right: "10px" }} /> */}
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

export default FoodItem;
