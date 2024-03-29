import styled from 'styled-components';

export const RecipeContainer = styled.div`
  width: 645px;
  display: flex;
  flex-direction: row;
  background-color: #2b240f;
  border-radius: 5px;
`;

export const Recipe = styled.div`
  //width: 50%;
  //padding: 5px 5px;
  margin-top: 10px;
`;

export const RecipeTitle = styled.span`
  margin: 0;
  margin-bottom: 6px;
  text-transform: capitalize;
  color: #d5cfc7;
  font-size: 14px;
  font-weight: 800;
`;

export const RecipeList = styled.ul`
  padding: 0;

  list-style: none;
`;

export const RecipeListItem = styled.li`
  position: relative;
`;

export const RecipeIndgredient = styled.p`
  margin: 0;
  margin-bottom: 2px;
  color: #d5cfc7;
  font-size: 12px;
  font-weight: 400;
`;

export const RecipeSteps = styled.p`
  margin: 0;
  /* margin-top: 10px; */
  color: #d5cfc7;
  font-size: 12px;
  font-weight: 400;
`;
