import { createSlice } from "@reduxjs/toolkit";
import { ASIAN_DISH } from "data/asian";
import { FastFood } from "data/available-meals";

const initialState = {
  itemsLiked: [],
};

const likedSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {
    handleLiked(state, action) {
      const id = action.payload;
      const product =
        ASIAN_DISH.find((item) => item.id === id) ||
        FastFood.find((item) => item.id === id);

      if (product) {
        const existingItem = state.itemsLiked.findIndex(
          (item) => item.id === id
        );
        if (existingItem !== -1) {
          state.itemsLiked.splice(existingItem, 1);
        } else {
          state.itemsLiked.push(product);
        }
      }
    },
  },
});

export const { handleLiked } = likedSlice.actions;
export const LikedReducer = likedSlice.reducer;
