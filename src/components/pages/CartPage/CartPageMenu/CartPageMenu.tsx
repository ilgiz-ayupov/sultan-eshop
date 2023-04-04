import React from "react";
import { nanoid } from "@reduxjs/toolkit";

import { CartProductType } from "types/CartProductType";

import { EmptyMenuTitle } from "components/atoms";
import { CartProductCard } from "components/molecules";

import styles from "./CartPageMenu.module.scss";

interface CartPageMenuProps {
  cartProducts: CartProductType[];
}

const CartPageMenu: React.FC<CartPageMenuProps> = ({ cartProducts }) => {
  if (cartProducts.length === 0) {
    return (
      <div className="container">
        <EmptyMenuTitle>Ваша корзина пуста</EmptyMenuTitle>
      </div>
    );
  }

  return (
    <div className="container">
      <ul className={styles.menu}>
        {cartProducts.map((product) => (
          <li key={nanoid()}>
            <CartProductCard cartProduct={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPageMenu;
