import React from "react";
import cn from "classnames";

import { useAppDispatch } from "hooks/redux";
import { changeQty } from "store/slices/cartSlice";

import styles from "./ProductCounterCard.module.scss";

interface ProductCounterCardProps {
  productId: number;
  qty: number;
  className?: string;
}

const ProductCounterCard: React.FC<ProductCounterCardProps> = ({
  productId,
  qty,
  className,
}) => {
  const counterClasses = cn(styles.counter, className);
  const dispatch = useAppDispatch();

  function changeQtyHandler(productId: number, action: "add" | "minus") {
    dispatch(changeQty({ productId, qty: 1, action }));
  }

  return (
    <div className={counterClasses}>
      <button
        className={styles.counter__btn}
        onClick={() => changeQtyHandler(productId, "minus")}
      >
        -
      </button>
      <span className={styles.counter__result}>{qty}</span>
      <button
        className={styles.counter__btn}
        onClick={() => changeQtyHandler(productId, "add")}
      >
        +
      </button>
    </div>
  );
};

export default ProductCounterCard;
