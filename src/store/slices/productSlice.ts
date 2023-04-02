import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "store";
import { ProductType } from "types/ProductType";

import PRODUCTS from "data/products.json";

const initialState = PRODUCTS as ProductType[];

// Slice
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

// Selectors
export const selectPromoProducts = (state: RootState) => {
  return state.products.filter((product) => product.isPopular);
};

export const selectProductById = (id: number) => {
  return (state: RootState) => {
    return state.products.find((product) => product.id === id);
  };
};