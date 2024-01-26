import { ASIAN_DISH } from 'data/asian';
import { FastFood } from 'data/available-meals';
import React from 'react';
import {
  RecipeContainer,
  Recipe,
  RecipeIndgredient,
  RecipeList,
  RecipeListItem,
  RecipeSteps,
  RecipeTitle,
} from './FavoritesRecipe.styled';
import { motion } from 'framer-motion';

const FavoritesRecipe = ({ id }) => {
  let product = ASIAN_DISH.find(item => item.id === id);
  if (!product) {
    product = FastFood.find(item => item.id === id);
  }

  return (
    <RecipeContainer
      as={motion.div}
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: 'spring', bounce: 0.5 }}
      exit={{ x: -50, opacity: 0 }}
    >
      <Recipe style={{ width: '45%' }}>
        <RecipeList>
          <RecipeTitle>what?</RecipeTitle>
          {product.ingredients.map((item, i) => (
            <RecipeListItem key={i}>
              <RecipeIndgredient>{item}</RecipeIndgredient>
            </RecipeListItem>
          ))}
        </RecipeList>
      </Recipe>
      <Recipe style={{ width: '55%' }}>
        <RecipeTitle>how?</RecipeTitle>{' '}
        <RecipeSteps>{product.recipe}</RecipeSteps>
      </Recipe>
    </RecipeContainer>
  );
};

export default FavoritesRecipe;
