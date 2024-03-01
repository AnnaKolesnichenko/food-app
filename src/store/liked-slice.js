import { createSlice } from "@reduxjs/toolkit";
import { ASIAN_DISH } from "data/asian";
import { FastFood } from "data/available-meals";

const initialState = {
  favoured: [],
};

const likedSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {
    handleLiked(state, action) {
      const product =
        ASIAN_DISH.find((item) => item.id === action.payload) ||
        FastFood.find((item) => item.id === action.payload);

      if (product) {
        if (
          state.likedItems.some((likedItem) => likedItem.id === action.payload)
        ) {
          state.likedItems = state.likedItems.filter(
            (likedItem) => likedItem.id !== action.payload
          );
        } else {
          state.likedItems.push(product);
        }
      }
    },
  },
});

export const likedActions = likedSlice.actions;
export default likedSlice.reducer;
