import React from "react";

import { Button } from "components/atoms";

import styles from "./CartPageResult.module.scss";

interface CartPageResultProps {
  cartTotalAmount: number;
}

const CartPageResult: React.FC<CartPageResultProps> = ({ cartTotalAmount }) => {
  if (cartTotalAmount <= 0) {
    return null;
  }

  return (
    <div className={styles.result}>
      <div className="container">
        <div className={styles.result__row}>
          <Button tag="a" href="/make-order">
            Оформить заказ
          </Button>

          <div className={styles.result__price}>
            {cartTotalAmount.toFixed(2)} ₸
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPageResult;
