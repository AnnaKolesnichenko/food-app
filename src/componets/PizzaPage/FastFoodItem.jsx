import { useContext } from 'react';
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
  const { handleLiked, likedItems } = cartCnxt;

  const included = likedItems.map(likedItem => likedItem.id).includes(item.id);

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
        alt={item.name}
        opacity={included ? '0.5' : '1'}
      />
      <StyledStar
        fillColor={included ? 'pink' : 'brown'}
        strokeColor={included ? 'white' : 'green'}
        onClick={() => {
          handleLiked(item.id);
        }}
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
