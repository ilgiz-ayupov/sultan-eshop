import React from "react";

import { ProductCard } from "components/molecules";
import { ProductType } from "types/ProductType";

import styles from "./ProductsMenu.module.scss";

interface Props {
  products: ProductType[];
}

const ProductsMenu: React.FC<Props> = ({ products }) => {
  return (
    <div className="container">
      <ul className={styles.menu}>
        {products.map((product) => (
          <li key={product.id} className={styles.menu__item}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsMenu;
