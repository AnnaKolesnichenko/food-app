import React, { useContext } from 'react';
import { Backdrop, Modal } from 'componets/UI/CommonStyles.styled';

import {
  AboutItem,
  ImageDescription,
  Image,
  AboutTitle,
  AboutPrice,
  AboutSpan,
  AboutDetailsSpan,
  AboutDescription,
  ButtonsStyled,
  IconStyled,
  CartStyled,
  LikedStyled,
} from './ModalAbout.styled';
import { ASIAN_DISH } from 'data/asian';

import bg from '../../data/assets/b.jpeg';
import { CartContext } from 'store/cart-context';
import { FastFood } from 'data/available-meals';
import { motion } from 'framer-motion';

const ModalAbout = ({ id, handleCloseModal }) => {
  const context = useContext(CartContext);
  const { likedItems } = context;

  let foodItem = ASIAN_DISH.find(item => item.id === id);
  if (!foodItem) {
    foodItem = FastFood.find(item => item.id === id);
  }
  const { image, title, price, description, cuisine, characteristic } =
    foodItem;

  const favored = likedItems.map(item => item.id).includes(id);

  return (
    <Backdrop>
      <Modal
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        as={motion.div}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.7, type: 'spring', bounce: 0.4 }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <ImageDescription>
            <Image src={image} alt={title} />
            <AboutItem>
              <AboutTitle>{title.toUpperCase()}</AboutTitle>
              {}
              <AboutPrice>${price}</AboutPrice>

              <AboutSpan>origin: </AboutSpan>
              <AboutDetailsSpan>
                {cuisine
                  .map(item => item)
                  .join()
                  .split(', ')}
              </AboutDetailsSpan>

              <AboutSpan>ingredients: </AboutSpan>
              <AboutDetailsSpan>
                {characteristic
                  .map(item => item)
                  .join()
                  .split(', ')}
              </AboutDetailsSpan>
              <AboutDescription>{description}</AboutDescription>
            </AboutItem>
          </ImageDescription>

          <ButtonsStyled>
            <IconStyled
              onClick={handleCloseModal}
              whileHover={{ scale: 1.2 }}
            />
            <CartStyled onClick={() => context.addItemToCart(id)} />
            <LikedStyled
              style={{ fill: favored ? 'coral' : '' }}
              onClick={() => context.handleLiked(id)}
            />
          </ButtonsStyled>
        </div>
      </Modal>
    </Backdrop>
  );
};

export default ModalAbout;
