import React from "react";

import masterCardIcon from "assets/icons/bank-cards/master-card.svg";
import visaIcon from "assets/icons/bank-cards/visa.svg";
import styles from "./BankCardsMenu.module.scss";

const BankCardsMenu: React.FC = () => {
  return (
    <ul className={styles.menu}>
      <li className={styles.menu__item}>
        <img src={visaIcon} alt="" />
      </li>
      <li className={styles.menu__item}>
        <img src={masterCardIcon} alt="" />
      </li>
    </ul>
  );
};

export default BankCardsMenu;
