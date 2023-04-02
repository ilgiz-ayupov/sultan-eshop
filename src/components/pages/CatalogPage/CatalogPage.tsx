import React from "react";
import { useParams } from "react-router-dom";

import { BreadCrumbs } from "components/molecules";
import { BaseTemplate } from "components/templates";

import { useAppSelector } from "hooks";
import { selectCategoryBySlug } from "store/slices/categorySlice";

import ErrorPage from "../ErrorPage/ErrorPage";
import CatalogPageHeader from "./CatalogPageHeader/CatalogPageHeader";

const CatalogPage: React.FC = () => {
  const { slug } = useParams();
  const category = useAppSelector(selectCategoryBySlug(slug ? slug : ""));

  if (!category) return <ErrorPage status={404} message="Category not found" />;

  return (
    <BaseTemplate>
      <BreadCrumbs
        links={[
          {
            name: category.name,
            isActive: true,
          },
        ]}
      />

      <CatalogPageHeader title={category.name} />
    </BaseTemplate>
  );
};

export default CatalogPage;
