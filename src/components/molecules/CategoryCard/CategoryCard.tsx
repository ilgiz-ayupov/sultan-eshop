import React from "react";
import { Link } from "react-router-dom";

import { CategoryType } from "types/CategoryType";

import styles from "./CategoryCard.module.scss";

const CategoryCard: React.FC<CategoryType> = ({ name, img, slug }) => {
  return (
    <div className={styles.card}>
      <div className={styles["card__img-wrapper"]}>
        <img className={styles.card__img} src={img} alt={name} />
      </div>

      <h3 className={styles.card__title}>
        <Link to={`/catalog/${slug}`}>{name}</Link>
      </h3>
    </div>
  );
};

export default CategoryCard;
