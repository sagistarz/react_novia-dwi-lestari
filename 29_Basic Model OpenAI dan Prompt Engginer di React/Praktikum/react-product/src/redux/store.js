import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import authSlice from "./authSlice"; // Import authSlice

export default configureStore({
  reducer: {
    products: productSlice,
    auth: authSlice, // Add authSlice to reducers
  },
});
