import { configureStore } from "@reduxjs/toolkit";

import { LikedReducer } from "./liked-slice";
import { CartReducer } from "./cart-slice";
import { dealsReducer } from "./deals-slice";

const store = configureStore({
  reducer: {
    cart: CartReducer,
    liked: LikedReducer,
    deals: dealsReducer,
  },
});

export default store;
