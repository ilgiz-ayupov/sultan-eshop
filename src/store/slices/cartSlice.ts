import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "store";
import { ProductType } from "types/ProductType";
import { CartProductType } from "types/CartProductType";

type CounterActionType = "add" | "minus";

interface CartState {
  totalQty: number;
  totalAmount: number;
  products: CartProductType[];
}

const initialState: CartState = {
  totalQty: 0,
  totalAmount: 0,
  products: [],
};

// Slice
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(
      state,
      payload: PayloadAction<{ product: ProductType; qty: number }>
    ) {
      const { product, qty } = payload.payload;
      const foundIndexProduct = state.products.findIndex(
        (stateProduct) => stateProduct.id === product.id
      );

      if (foundIndexProduct !== -1) {
        const foundProduct = state.products[foundIndexProduct];

        state.products.splice(foundIndexProduct, 1, {
          ...foundProduct,
          qty: foundProduct.qty + qty,
          totalAmount: foundProduct.totalAmount + foundProduct.price * qty,
        });
      } else {
        state.products.push({
          ...product,
          qty,
          totalAmount: product.price * qty,
        });
      }

      state.totalQty += qty;
      state.totalAmount += product.price * qty;
      return state;
    },
    deleteFromCart(state, payload: PayloadAction<{ productId: number }>) {
      const { productId } = payload.payload;

      const foundIndexProduct = state.products.findIndex(
        (product) => product.id === productId
      );
      if (foundIndexProduct !== -1) {
        const foundProduct = state.products[foundIndexProduct];
        state.products.splice(foundIndexProduct, 1);

        state.totalQty -= foundProduct.qty;
        state.totalAmount -= foundProduct.totalAmount;
      } else {
        return state;
      }
    },
    changeQty(
      state,
      payload: PayloadAction<{
        productId: number;
        qty: number;
        action: CounterActionType;
      }>
    ) {
      const { productId, qty, action } = payload.payload;
      const foundIndexProduct = state.products.findIndex(
        (stateProduct) => stateProduct.id === productId
      );

      if (foundIndexProduct !== -1) {
        const foundProduct = state.products[foundIndexProduct];

        let calcQty = foundProduct.qty;
        let calcAmount = foundProduct.totalAmount;
        if (action === "add") {
          calcQty = foundProduct.qty + qty;
          calcAmount = foundProduct.totalAmount + foundProduct.price * qty;
          state.totalQty += qty;
          state.totalAmount += foundProduct.price * qty;
        } else if (action === "minus") {
          calcQty = foundProduct.qty - qty;
          calcAmount = foundProduct.totalAmount - foundProduct.price * qty;
          state.totalQty -= qty;
          state.totalAmount -= foundProduct.price * qty;
        } else {
          return state;
        }

        if (calcQty > 0) {
          state.products.splice(foundIndexProduct, 1, {
            ...foundProduct,
            qty: calcQty,
            totalAmount: calcAmount,
          });
        } else {
          state.products.splice(foundIndexProduct, 1);
        }
      } else {
        return state;
      }
    },
  },
});

// Actions
export const { addToCart, deleteFromCart, changeQty } = cartSlice.actions;

// Selectors
export const selectCart = (state: RootState) => state.cart;
export const selectCartProduct = (productId: number | undefined) => {
  return (state: RootState) => {
    if (typeof productId === "number") {
      return state.cart.products.find(
        (cartProduct) => cartProduct.id === productId
      );
    }
  };
};
