import React from "react";
import { useParams } from "react-router-dom";

import { useAppSelector } from "hooks/redux";
import { selectProductById } from "store/slices/productSlice";
import { selectCartProduct } from "store/slices/cartSlice";

import {
  ProductVolumeCard,
  ProductCounterCard,
  ProductCartButton,
} from "components/atoms";
import { BaseTemplate } from "components/templates";

import ProductDetailCharacteristics from "./ProductDetailCharacteristics/ProductDetailCharacteristics";
import ErrorPage from "../ErrorPage/ErrorPage";

import styles from "./ProductDetail.module.scss";

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const product = useAppSelector(selectProductById(Number(id)));
  const cartProduct = useAppSelector(selectCartProduct(product?.id));

  if (!product) {
    return <ErrorPage status={404} message="Product not found" />;
  }

  return (
    <BaseTemplate>
      <section id="product-detail">
        <div className="container">
          <div className={styles.product}>
            <div className={styles.product__image}>
              <img src={product.img} alt={product.title} />
            </div>
            <div className={styles.product__details}>
              <div className={styles.product__status}>В наличии</div>
              <h1 className={styles.product__title}>
                <strong>{product.brand}</strong>
                <span>{product.title}</span>
              </h1>
              <ProductVolumeCard
                className={styles.product__volume}
                volume={product.volume}
              />
              <div className={styles.product__row}>
                <div className={styles.product__price}>
                  {product.price.toFixed(2)} ₸
                </div>
                {cartProduct ? (
                  <ProductCounterCard
                    productId={cartProduct.id}
                    qty={cartProduct.qty}
                  />
                ) : (
                  <ProductCartButton product={product} />
                )}
              </div>
              <ProductDetailCharacteristics product={product} />
            </div>
          </div>
        </div>
      </section>
    </BaseTemplate>
  );
};

export default ProductDetail;
