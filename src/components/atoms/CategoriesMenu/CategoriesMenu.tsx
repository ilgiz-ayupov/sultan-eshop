import React from "react";
import cn from "classnames";

import { CategoryCard } from "components/molecules";

import { useAppSelector } from "hooks";
import { selectAllCategories } from "store/slices/categorySlice";

import styles from "./CategoriesMenu.module.scss";

interface CategoriesMenuProps {
  className?: string;
}

const CategoriesMenu: React.FC<CategoriesMenuProps> = ({ className }) => {
  const categories = useAppSelector(selectAllCategories);
  const menuClasses = cn(styles.categories, className);

  return (
    <ul className={menuClasses}>
      {categories.map((category) => (
        <li key={category.slug}>
          <CategoryCard {...category} />
        </li>
      ))}
    </ul>
  );
};

export default CategoriesMenu;
