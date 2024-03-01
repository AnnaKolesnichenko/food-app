import { configureStore } from "@reduxjs/toolkit";

import likedSlice from "./liked-slice";

const store = configureStore({
  reducer: {
cart: cart
    liked: likedSlice.reducer,
  },
});

export default store;
