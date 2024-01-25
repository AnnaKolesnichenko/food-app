import React, { useContext } from 'react';
import { CartContext } from 'store/cart-context';
import { Container, FavoritesList } from './FavoritesPage.styled';

import FavoritesItem from './FavoritesItem';

const FavoritesPage = () => {
  const favoritesContext = useContext(CartContext);
  const { likedItems } = favoritesContext;

  return (
    <Container>
      <FavoritesList>
        {likedItems.map(item => (
          <FavoritesItem item={item} />
        ))}
      </FavoritesList>
    </Container>
  );
};

export default FavoritesPage;
