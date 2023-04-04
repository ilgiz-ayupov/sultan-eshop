import React from "react";

import { PageTitle } from "components/atoms";
import { BaseTemplate } from "components/templates";

import { BreadCrumbs } from "components/molecules";

import AdminPageForm from "./AdminPageForm/AdminPageForm";
import styles from "./AdminPage.module.scss"

const AdminPage: React.FC = () => {
  return (
    <BaseTemplate>
      <BreadCrumbs
        links={[
          {
            name: "Админка",
            isActive: true,
          },
        ]}
      />
      <div className="container">
        <PageTitle className={styles.title}>Добавить товар:</PageTitle>
      </div>

      <AdminPageForm />
    </BaseTemplate>
  );
};

export default AdminPage;
