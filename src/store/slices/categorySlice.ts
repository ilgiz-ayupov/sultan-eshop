import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "store";
import { CategoryType } from "types/CategoryType";

import CATEGORIES from "data/categories.json";

const initialState = CATEGORIES as CategoryType[];

// Slice
export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});

// Selectors
export const selectAllCategories = (state: RootState) => state.categories;
export const selectCategoryBySlug = (slug: string) => {
  return (state: RootState) => {
    return state.categories.find((category) => category.slug === slug);
  };
};
