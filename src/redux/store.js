import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartOps";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
