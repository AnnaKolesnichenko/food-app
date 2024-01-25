import React, { useContext } from 'react';
import { CartContext } from 'store/cart-context';
import {
  Container,
  FavoritesImage,
  FavoritesLiItem,
  FavoritesList,
} from './FavoritesPage.styled';

const FavoritesPage = () => {
  const favoritesContext = useContext(CartContext);
  const { likedItems } = favoritesContext;

  return (
    <Container>
      <FavoritesList>
        {likedItems.map(item => (
          <FavoritesLiItem key={item.id}>
            <FavoritesImage src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </FavoritesLiItem>
        ))}
      </FavoritesList>
    </Container>
  );
};

export default FavoritesPage;
