import React from "react";
import { Container, FavoritesList } from "./FavoritesPage.styled";

import FavoritesItem from "./FavoritesItem";
import { useSelector } from "react-redux";

const FavoritesPage = () => {
  // const favoritesContext = useContext(CartContext);
  // const { likedItems } = favoritesContext;

  const likedItems = useSelector((state) => state.liked.itemsLiked);
  return (
    <Container>
      <FavoritesList>
        {likedItems.map((item) => (
          <FavoritesItem item={item} />
        ))}
      </FavoritesList>
    </Container>
  );
};

export default FavoritesPage;
