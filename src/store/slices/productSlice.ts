import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "store";
import { ProductType } from "types/ProductType";

import PRODUCTS from "data/products.json";

const initialState = PRODUCTS as ProductType[];

// Slice
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct(state, payload: PayloadAction<{ product: ProductType }>) {
      state.push(payload.payload.product);
    },
  },
});

// Actions;
export const { addProduct } = productSlice.actions;

// Selectors
export const selectPromoProducts = (state: RootState) => {
  const result = state.products
    .filter((product) => product.isPopular)
    .slice(0, 12);
  result.sort(() => Math.random() - 0.5);
  return result;
};

export const selectProductById = (id: number) => {
  return (state: RootState) => {
    return state.products.find((product) => product.id === id);
  };
};

export const selectProductsByCategorySlug = (slug: string) => {
  return (state: RootState) => {
    return state.products.filter((product) => product.category.slug === slug);
  };
};
