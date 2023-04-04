import React from "react";

import {
  ProductTitle,
  ProductVolumeCard,
  ProductCounterCard,
  IconButton,
} from "components/atoms";

import { useAppDispatch } from "hooks/redux";
import { deleteFromCart } from "store/slices/cartSlice";

import { CartProductType } from "types/CartProductType";

import { ReactComponent as TrashIcon } from "assets/icons/trash.svg";
import styles from "./CartProductCard.module.scss";

interface CartProductCardProps {
  cartProduct: CartProductType;
}

const CartProductCard: React.FC<CartProductCardProps> = ({ cartProduct }) => {
  const dispatch = useAppDispatch();

  function deleteFromCartHandler(productId: number) {
    dispatch(deleteFromCart({ productId }));
  }

  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img src={cartProduct.img} alt={cartProduct.title} />
      </div>

      <div className={styles.card__details}>
        <ProductVolumeCard volume={cartProduct.volume} />
        <ProductTitle
          className={styles.card__title}
          id={cartProduct.id}
          title={cartProduct.title}
          brand={cartProduct.brand}
        />
        <p className={styles.card__desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis
          vulputate feugiat massa vestibulum duis.{" "}
        </p>
      </div>

      <div className={styles.card__footer}>
        <div className={styles.card__divider} />
        <ProductCounterCard productId={cartProduct.id} qty={cartProduct.qty} />
        <div className={styles.card__divider} />
        <div className={styles.card__price}>
          {cartProduct.totalAmount.toFixed(2)} ₸
        </div>
        <div className={styles.card__divider} />
        <IconButton
          tag="button"
          type="button"
          onClick={() => deleteFromCartHandler(cartProduct.id)}
        >
          <TrashIcon width={17} height={17} />
        </IconButton>
      </div>
    </div>
  );
};

export default CartProductCard;
