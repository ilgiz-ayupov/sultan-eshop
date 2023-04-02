import React from "react";

import { PageTitle } from "components/atoms";
import styles from "./CartPageHeader.module.scss";

const CartPageHeader: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className="header__row">
          <PageTitle>Корзина</PageTitle>
        </div>
      </div>
    </div>
  );
};

export default CartPageHeader;
