import React from "react";

import { PageTitle } from "components/atoms";
import CatalogPageSortByMenu from "../CatalogPageSortByMenu/CatalogPageSortByMenu";

import styles from "./CatalogPageHeader.module.scss";

interface CatalogPageHeaderProps {
  title: string;
}

const CatalogPageHeader: React.FC<CatalogPageHeaderProps> = ({ title }) => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header__row}>
          <PageTitle>{title}</PageTitle>
          <CatalogPageSortByMenu />
        </div>
      </div>
    </div>
  );
};

export default CatalogPageHeader;
