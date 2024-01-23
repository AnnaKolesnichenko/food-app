import { useState, useContext } from 'react';
import { CartContext } from '../../store/cart-context';
import {
  Item,
  StyledImage,
  StyledStar,
  StyledInfo,
  Title,
  Price,
} from './FastFoodItem.styled';
import { Button } from 'componets/UI/CommonStyles.styled';
import { motion } from 'framer-motion';

const FastFoodItem = ({ item, handleOpenModal }) => {
  const cartCnxt = useContext(CartContext);
  const [isLiked, setIsLiked] = useState(false);

  const handleLiked = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Item style={{ position: 'relative' }}>
      <StyledImage
        src={item.image}
        alt={item.name}
        opacity={isLiked ? '0.5' : '1'}
      />
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
            type="button"
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 500 }}
            onClick={() => {
              cartCnxt.addItemToCart(item.id);
            }}
          >
            Order
          </Button>
          <Button
            type="button"
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 500 }}
            onClick={() => handleOpenModal(item.id)}
          >
            About
          </Button>
        </div>
      </StyledInfo>
    </Item>
  );
};

export default FastFoodItem;
