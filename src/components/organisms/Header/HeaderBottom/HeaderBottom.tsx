import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as CatalogIcon } from "assets/icons/catalog.svg";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";

import styles from "./HeaderBottom.module.scss";

const HeaderBottom: React.FC = () => {
  return (
    <div className={styles["header-bottom"]}>
      <div className={styles["header-bottom__row"]}>
        <Link className={styles.btn} to="/catalog">
          <CatalogIcon className={styles.btn__icon} width={15} height={15} />
          <span>Каталог</span>
        </Link>

        <button className={styles.btn} type="button">
          <SearchIcon className={styles.btn__icon} width={15} height={15} />
          <span>Поиск</span>
        </button>
      </div>
    </div>
  );
};

export default HeaderBottom;
