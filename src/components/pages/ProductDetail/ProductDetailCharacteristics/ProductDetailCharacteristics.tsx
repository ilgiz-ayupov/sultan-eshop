import React from "react";
import cn from "classnames";

import { ProductType } from "types/ProductType";

import styles from "./ProductDetailCharacteristics.module.scss";

interface ProductDetailCharacteristicsProps {
  product: ProductType;
  className?: string;
}

const ProductDetailCharacteristics: React.FC<
  ProductDetailCharacteristicsProps
> = ({ product, className }) => {
  const menuClasses = cn(styles.menu, className);

  return (
    <ul className={menuClasses}>
      <li className={styles.menu__item}>
        <span className={styles.menu__key}>Производитель:</span>
        <span className={styles.menu__value}>
          {product.producerName ?? "Не указано"}
        </span>
      </li>
      <li className={styles.menu__item}>
        <span className={styles.menu__key}>Бренд:</span>
        <span className={styles.menu__value}>
          {product.brand ?? "Не указано"}
        </span>
      </li>
      <li className={styles.menu__item}>
        <span className={styles.menu__key}>Штрихкод:</span>
        <span className={styles.menu__value}>
          {product.barcode ?? "Не указано"}
        </span>
      </li>
    </ul>
  );
};

export default ProductDetailCharacteristics;
