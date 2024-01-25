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
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const FavoritesImage = styled.img`
  width: 15%;
  height: 215px;
  border-radius: 10px;
`;

export const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  margin-right: 10px;
  padding: 0;
  width: 15%;
`;

export const AboutTitle = styled.p`
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #d5cfc7;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 0.7px;
`;

export const AboutComplexity = styled.h3`
  margin: 0;
  color: #d5cfc7;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.6px;
`;
