import React from "react";

import { Navigation, Contacts } from "components/molecules";

import styles from "./HeaderTop.module.scss";

const HeaderTop: React.FC = () => {
  return (
    <div className={styles["header-top"]}>
      <div className="container">
        <div className={styles["header-top__row"]}>
          <Contacts className={styles["header-top__contacts"]} />
          <Navigation className={styles["header-top__nav"]} direction="horizontal" />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
