import React, { useContext } from "react";
import {
  Item,
  Price,
  StyledImage,
  StyledInfo,
  StyledStar,
  Title,
} from "./SushiPage.styled";
import { Button } from "componets/UI/CommonStyles.styled";
import { CartContext } from "../../store/cart-context";
import { motion } from "framer-motion";

const FoodItem = ({ item, handleOpenModal }) => {
  const cartCnxt = useContext(CartContext);
  const { likedItems, handleLiked } = cartCnxt;

  const included = likedItems.map((liked) => liked.id).includes(item.id);

  return (
    <Item
      as={motion.li}
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }}
      style={{ position: "relative" }}
    >
      <StyledImage
        src={item.image}
        alt={item.title}
        opacity={included ? "0.5" : "1"}
      />
      <StyledStar
        fillColor={included ? "pink" : "brown"}
        strokeColor={included ? "white" : "green"}
        onClick={() => handleLiked(item.id)}
      />
      <StyledInfo>
        <Title>{item.title}</Title>
        <Price>${item.price}</Price>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            justifyContent: "center",
          }}
        >
          <Button
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500 }}
            type="button"
            onClick={() => cartCnxt.addItemToCart(item.id)}
          >
            Order
          </Button>
          <Button
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500 }}
            type="button"
            onClick={() => {
              handleOpenModal(item.id);
            }}
          >
            About
          </Button>
        </div>
      </StyledInfo>
    </Item>
  );
};

export default FoodItem;
