import React from "react";
import { useParams } from "react-router-dom";

import { ProductsMenu, EmptyMenuTitle } from "components/atoms";
import { BreadCrumbs } from "components/molecules";
import { BaseTemplate } from "components/templates";

import { useAppSelector } from "hooks/redux";
import { selectCategoryBySlug } from "store/slices/categorySlice";
import { selectProductsByCategorySlug } from "store/slices/productSlice";

import { CategoryTypeType } from "types/CategoryTypeType";

import ErrorPage from "../ErrorPage/ErrorPage";
import CatalogPageHeader from "./CatalogPageHeader/CatalogPageHeader";
import CatalogPageTypeFilter from "./CatalogPageTypeFilter/CatalogPageTypeFilter";
import { OptionType } from "types/OptionType";

const CatalogPage: React.FC = () => {
  const { slug } = useParams();
  const category = useAppSelector(selectCategoryBySlug(slug ?? ""));

  let products = useAppSelector(
    selectProductsByCategorySlug(category?.slug ?? "")
  );

  const [activeType, setActiveType] = React.useState<null | CategoryTypeType>(
    null
  );
  const [sortBy, setSortBy] = React.useState<null | OptionType>(null);

  if (!category) return <ErrorPage status={404} message="Category not found" />;

  if (activeType) {
    products = products.filter(
      (product) => product.category.type.name === activeType.name
    );
  }
  
  if (sortBy) {
    products = products.sort((a, b) => {
      switch (sortBy.value) {
        case "title":
          return a.title.localeCompare(b.title);
        case "price":
          return a.price - b.price;
        default:
          return 0;
      }
    });
  }

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

      <CatalogPageHeader
        title={category.name}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      {!!category.types && (
        <CatalogPageTypeFilter
          types={category.types}
          activeType={activeType}
          setActiveType={setActiveType}
        />
      )}

      {products.length > 0 ? (
        <ProductsMenu products={products} />
      ) : (
        <div className="container">
          <EmptyMenuTitle>По вашему запросу найдено 0 продуктов</EmptyMenuTitle>
        </div>
      )}
    </BaseTemplate>
  );
};

export default CatalogPage;
