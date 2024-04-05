import { configureStore } from "@reduxjs/toolkit";

import { LikedReducer } from "./liked-slice";
import { CartReducer } from "./cart-slice";

const store = configureStore({
  reducer: {
    cart: CartReducer,
    liked: LikedReducer,
  },
});

export default store;
