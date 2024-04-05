import { ASIAN_DISH } from "data/asian";
import { FastFood } from "data/available-meals";
import { PiCookingPot, PiBowlFoodDuotone } from "react-icons/pi";

import React from "react";
import {
  RecipeContainer,
  Recipe,
  RecipeIndgredient,
  RecipeList,
  RecipeListItem,
  RecipeSteps,
  RecipeTitle,
} from "./FavoritesRecipe.styled";
import { motion } from "framer-motion";

const FavoritesRecipe = ({ id }) => {
  let product = ASIAN_DISH.find((item) => item.id === id);
  if (!product) {
    product = FastFood.find((item) => item.id === id);
  }

  console.log(product);

  return (
    <RecipeContainer
      as={motion.div}
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
      exit={{ x: -50, opacity: 0 }}
    >
      <Recipe
        style={{ width: "45%", paddingLeft: "5px", paddingBottom: "5px" }}
      >
        <RecipeList>
          <RecipeTitle>what?</RecipeTitle>
          {product.ingredients.map((item, i) => (
            <RecipeListItem key={i}>
              <RecipeIndgredient>
                <span
                  style={{
                    marginRight: "2px",
                  }}
                >
                  <PiBowlFoodDuotone fill="grey" />
                </span>
                {item}
              </RecipeIndgredient>
            </RecipeListItem>
          ))}
        </RecipeList>
      </Recipe>
      <Recipe
        style={{ width: "55%", paddingRight: "5px", paddingBottom: "5px" }}
      >
        <RecipeTitle>how?</RecipeTitle>{" "}
        <RecipeSteps>
          {product.recipe &&
            product.recipe.map((item, i) => (
              <RecipeListItem key={i}>
                <RecipeIndgredient>
                  {" "}
                  <span
                    style={{
                      marginRight: "2px",
                    }}
                  >
                    <PiCookingPot fill="grey" />
                    {"  "}
                  </span>
                  {item}
                </RecipeIndgredient>
              </RecipeListItem>
            ))}
        </RecipeSteps>
      </Recipe>
    </RecipeContainer>
  );
};

export default FavoritesRecipe;
