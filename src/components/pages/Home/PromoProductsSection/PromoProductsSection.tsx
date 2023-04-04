import React from "react";

import {
  Section,
  SectionHeader,
  SectionTitle,
  ProductsMenu,
} from "components/atoms";

import { useAppSelector } from "hooks/redux";
import { selectPromoProducts } from "store/slices/productSlice";

const PromoProductsSection: React.FC = () => {
  const PRODUCTS = useAppSelector(selectPromoProducts);

  return (
    <Section id="promo-products">
      <div className="container">
        <SectionHeader>
          <SectionTitle>
            <span className="accent">Акционные</span> товары
          </SectionTitle>
        </SectionHeader>

        <ProductsMenu products={PRODUCTS} />
      </div>
    </Section>
  );
};

export default PromoProductsSection;
