import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import {
  Home,
  CatalogPage,
  ProductDetail,
  CartPage,
  CategoriesPage,
  AdminPage,
  ErrorPage,
} from "./pages";
import store from "store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage status={404} message="Page not found" />,
  },
  {
    path: "/catalog/",
    element: <CategoriesPage />,
  },
  {
    path: "/catalog/:slug/",
    element: <CatalogPage />,
  },
  {
    path: "/product/:id/",
    element: <ProductDetail />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
]);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
