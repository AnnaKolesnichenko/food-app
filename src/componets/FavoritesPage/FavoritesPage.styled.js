import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const FavoritesList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  justify-content: center;
  gap: 20px;
  margin: 0;
  padding: 0;
  margin-top: 30px;
`;

export const FavoritesLiItem = styled.li`
  /* width: calc((100% - 40px) / 4); */
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const FavoritesImage = styled.img`
  width: 170px;
  height: 250px;
`;
