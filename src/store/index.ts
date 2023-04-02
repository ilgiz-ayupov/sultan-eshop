import { configureStore } from "@reduxjs/toolkit";

import { categorySlice } from "./slices/categorySlice";
import { productSlice } from "./slices/productSlice";
import { cartSlice } from "./slices/cartSlice";

import { loadFromLocalStorage } from "services/localstorage-servise";
import { localStorageMiddleware } from "./middlewares/localstorage-middleware";

const persistedState = loadFromLocalStorage();
const store = configureStore({
  reducer: {
    [categorySlice.name]: categorySlice.reducer,
    [productSlice.name]: productSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
