import React from "react";

import { useAppSelector } from "hooks";
import { selectCart } from "store/slices/cartSlice";

import { BreadCrumbs } from "components/molecules";
import { BaseTemplate } from "components/templates";

import CartPageHeader from "./CartPageHeader/CartPageHeader";
import CartPageMenu from "./CartPageMenu/CartPageMenu";
import CartPageResult from "./CartPageResult/CartPageResult";

const CartPage: React.FC = () => {
  const cart = useAppSelector(selectCart);

  return (
    <BaseTemplate>
      <BreadCrumbs links={[{ name: "Корзина", isActive: true }]} />
      <CartPageHeader />

      <CartPageMenu cartProducts={cart.products} />
      <CartPageResult cartTotalAmount={cart.totalAmount} />
    </BaseTemplate>
  );
};

export default CartPage;
