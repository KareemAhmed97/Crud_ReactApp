import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";
import auth from "./authSlice";

export const store = configureStore({
  reducer:{
  bookSlice,auth
  }
})

