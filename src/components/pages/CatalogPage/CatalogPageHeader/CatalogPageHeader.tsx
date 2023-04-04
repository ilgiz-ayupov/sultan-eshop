import React from "react";

import { PageTitle } from "components/atoms";
import CatalogPageSortByMenu from "../CatalogPageSortByMenu/CatalogPageSortByMenu";

import styles from "./CatalogPageHeader.module.scss";
import { OptionType } from "types/OptionType";

interface CatalogPageHeaderProps {
  title: string;
  sortBy: OptionType | null;
  setSortBy: (option: OptionType) => void;
}

const CatalogPageHeader: React.FC<CatalogPageHeaderProps> = ({
  title,
  sortBy,
  setSortBy,
}) => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header__row}>
          <PageTitle>{title}</PageTitle>
          <CatalogPageSortByMenu sortBy={sortBy} setSortBy={setSortBy} />
        </div>
      </div>
    </div>
  );
};

export default CatalogPageHeader;
