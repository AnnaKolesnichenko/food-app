import { createSlice } from "@reduxjs/toolkit";
import { ASIAN_DISH } from "data/asian";
import { FastFood } from "data/available-meals";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemToCart(state, action) {
      const product =
        ASIAN_DISH.find((item) => item.id === action.payload) ||
        FastFood.find((item) => item.id === action.payload);
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (!product || !existingItem) {
        alert("Product not found");
      }

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    handleIncreaseItem(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    handleDecreaseItem(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        if (item.quantity === 1) {
          state.items.splice(itemIndex, 1);
        } else {
          item.quantity--;
        }
      }
    },
  },
});

export const { addItemToCart, handleDecreaseItem, handleIncreaseItem } =
  cartSlice.actions;
export default cartSlice.reducer;
