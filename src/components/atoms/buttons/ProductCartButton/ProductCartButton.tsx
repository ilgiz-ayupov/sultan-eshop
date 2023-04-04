import React from "react";

import { useAppDispatch } from "hooks/redux";
import { addToCart } from "store/slices/cartSlice";

import { ProductType } from "types/ProductType";
import { ButtonSizeType } from "../types";

import Button from "../Button/Button";
import { ReactComponent as CartIcon } from "assets/icons/cart.svg";

interface ProductCartButtonProps {
  product: ProductType;
  className?: string;
  size?: ButtonSizeType;
}

const ProductCartButton: React.FC<ProductCartButtonProps> = ({
  product,
  className,
  size,
}) => {
  const dispatch = useAppDispatch();

  function addToCartHandler(product: ProductType) {
    dispatch(addToCart({ product, qty: 1 }));
  }
  return (
    <Button
      className={className}
      tag="button"
      type="button"
      size={size}
      icon={<CartIcon width={27} height={27} />}
      onClick={() => addToCartHandler(product)}
    >
      В корзину
    </Button>
  );
};

export default ProductCartButton;
