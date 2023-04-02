import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

import { useAppSelector } from "hooks";
import { selectCart } from "store/slices/cartSlice";

import { ReactComponent as CartIcon } from "assets/icons/cart.svg";
import styles from "./CartButton.module.scss";

interface CartButtonProps {
  className?: string;
}

const CartButton: React.FC<CartButtonProps> = ({ className }) => {
  const cart = useAppSelector(selectCart);
  const btnClasses = cn(styles.btn, className);

  return (
    <Link className={btnClasses} to="/cart">
      <div className={styles.btn__iconbox}>
        <CartIcon />
        {cart.totalQty > 0 && (
          <span className={styles.btn__badge}>{cart.totalQty}</span>
        )}
      </div>
      {cart.totalAmount > 0 && (
        <div className={styles.btn__content}>
          <span className={styles.btn__name}>Корзина</span>
          <strong className={styles.btn__price}>
            {cart.totalAmount.toFixed(2)} ₸{" "}
          </strong>
        </div>
      )}
    </Link>
  );
};

export default CartButton;
