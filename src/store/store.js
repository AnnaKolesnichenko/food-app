import { configureStore } from "@reduxjs/toolkit";

import likedSlice from "./liked-slice";
import { CartReducer } from "./cart-slice";

const store = configureStore({
  reducer: {
    cart: CartReducer,
    liked: likedSlice.reducer,
  },
});

export default store;
