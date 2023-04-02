import React from "react";

import { PageTitle, CategoriesMenu } from "components/atoms";
import { BaseTemplate } from "components/templates";

import styles from "./CategoriesPage.module.scss";

const CategoriesPage: React.FC = () => {
  return (
    <BaseTemplate>
      <section id="categories-page">
        <div className="container">
          <div className={styles.pageRow}>
            <PageTitle className={styles.pageTitle}>Категории: </PageTitle>

            <CategoriesMenu />
          </div>
        </div>
      </section>
    </BaseTemplate>
  );
};

export default CategoriesPage;
