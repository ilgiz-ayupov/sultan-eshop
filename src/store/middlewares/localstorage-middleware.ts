import {
  saveToLocalStorage,
} from "services/localstorage-servise";
import { Middleware } from "@reduxjs/toolkit";

export const localStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    const result = next(action);
    saveToLocalStorage(store.getState());
    return result;
  };
