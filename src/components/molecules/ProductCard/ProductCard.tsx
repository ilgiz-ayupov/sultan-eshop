import React from "react";
import cn from "classnames";

import {
  ProductTitle,
  ProductVolumeCard,
  ProductCartButton,
} from "components/atoms";

import { ProductType } from "types/ProductType";

import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    id,
    title,
    barcode,
    producerName,
    brand,
    price,
    img,
    isPopular,
    volume,
  } = product;

  return (
    <div className={styles.card}>
      {isPopular && <div className={styles.card__badge}>популярное</div>}

      <div className={styles.card__header}>
        <img src={img} alt={title} />
      </div>

      <div className={styles.card__content}>
        <ProductVolumeCard volume={volume} />

        <ProductTitle
          className={styles.card__title}
          id={id}
          title={title}
          brand={brand}
        />

        <ul className={cn(styles.features, styles.card__features)}>
          <li className={styles.features__item}>
            <span className={styles.features__name}>Штрихкод:</span>
            <span className={styles.features__value}>{barcode}</span>
          </li>
          <li className={styles.features__item}>
            <span className={styles.features__name}>Производитель:</span>
            <span className={styles.features__value}>{producerName}</span>
          </li>
          <li className={styles.features__item}>
            <span className={styles.features__name}>Бренд:</span>
            <span className={styles.features__value}>{brand}</span>
          </li>
        </ul>

        <div className={styles.card__footer}>
          <strong className={styles.card__price}>{price} ₸</strong>
          <ProductCartButton
            product={product}
            size="small"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
