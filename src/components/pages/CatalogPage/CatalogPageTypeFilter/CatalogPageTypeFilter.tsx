import React from "react";
import cn from "classnames";
import { nanoid } from "@reduxjs/toolkit";

import { CategoryTypeType } from "types/CategoryTypeType";

import styles from "./CatalogPageTypeFilter.module.scss";

interface Props {
  types: CategoryTypeType[];
  activeType: CategoryTypeType | null;
  setActiveType: (type: CategoryTypeType | null) => void;
}

const CatalogPageTypeFilter: React.FC<Props> = ({
  types,
  activeType,
  setActiveType,
}) => {
  const activeTypeHandler = (type: CategoryTypeType) => {
    if (type === activeType) {
      setActiveType(null);
    } else {
      setActiveType(type);
    }
  };

  return (
    <div className={styles.filters}>
      <div className="container">
        <ul className={styles.filtersMenu}>
          {types.map((type) => (
            <li key={nanoid()} className={styles.filtersMenu__item}>
              <button
                className={cn(styles.filtersMenu__btn, {
                  [styles.filtersMenu__active]: type === activeType,
                })}
                onClick={() => activeTypeHandler(type)}
              >
                {type.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CatalogPageTypeFilter;
