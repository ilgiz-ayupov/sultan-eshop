import React from "react";
import cn from "classnames";

import { Link } from "react-router-dom";

import styles from "./ProductTitle.module.scss";

interface ProductTitleProps {
  id: number;
  title: string;
  brand: string;
  className?: string;
}

const ProductTitle: React.FC<ProductTitleProps> = ({
  id,
  title,
  brand,
  className,
}) => {
  const titleClasses = cn(styles.title, className);

  return (
    <h3 className={titleClasses}>
      <Link to={`/product/${id}`}>
        <strong>{brand}</strong>
        <span>{title}</span>
      </Link>
    </h3>
  );
};

export default ProductTitle;
