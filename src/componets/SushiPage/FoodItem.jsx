import React, { useContext, useState } from 'react';
import {
  Button,
  Item,
  Price,
  StyledImage,
  StyledInfo,
  StyledStar,
  Title,
} from './SushiPage.styled';

import { CartContext } from '../../store/cart-context';

import { motion } from 'framer-motion';

const FoodItem = ({ item }) => {
  const cartCnxt = useContext(CartContext);
  const [isLiked, setIsLiked] = useState(false);

  const handleLiked = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Item
      as={motion.li}
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }}
      style={{ position: 'relative' }}
    >
      <StyledImage
        src={item.image}
        alt={item.title}
        opacity={isLiked ? '0.5' : '1'}
      />
      {/* <FaRegStar style={{ position: "absolute", top: "10px", right: "10px" }} /> */}
      <StyledStar
        fillColor={isLiked ? 'pink' : 'brown'}
        strokeColor={isLiked ? 'white' : 'green'}
        onClick={handleLiked}
      />
      <StyledInfo>
        <Title>{item.title}</Title>
        <Price>${item.price}</Price>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 5,
            justifyContent: 'center',
          }}
        >
          <Button
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 500 }}
            type="button"
            onClick={() => {
              cartCnxt.addItemToCart(item.id);
            }}
          >
            Order
          </Button>
          <Button
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 500 }}
            type="button"
            onClick={() => {
              cartCnxt.addItemToCart(item.id);
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
