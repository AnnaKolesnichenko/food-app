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
      const id = action.payload;
      let product = ASIAN_DISH.find((item) => item.id === id);

      if (!product) {
        FastFood.find((item) => item.id === id);
      }

      if (product) {
        const existingItem = state.items.find((item) => item.id === id);

        if (existingItem) {
          existingItem.quantity++;
        } else {
          state.items.push({ ...product, quantity: 1 });
        }
      } else {
        alert("There is no such product");
      }
    },
    handleIncreaseItem(state, action) {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity++;
      }
    },
    handleDecreaseItem(state, action) {
      const id = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        if (item.quantity === 1) {
          state.items.splice(itemIndex, 1);
        } else {
          item.quantity--;
        }
      }
    },
    clearCart(state, action) {
      state.items = [];
    },
  },
});

// export const { addItemToCart, handleDecreaseItem, handleIncreaseItem } =
//   cartSlice.actions;
export const {
  addItemToCart,
  handleDecreaseItem,
  handleIncreaseItem,
  clearCart,
} = cartSlice.actions;
export const CartReducer = cartSlice.reducer;
