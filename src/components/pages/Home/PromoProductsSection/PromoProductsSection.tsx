import React from "react";

import { Section, SectionHeader, SectionTitle } from "components/atoms";
import { ProductCard } from "components/molecules";

import { useAppSelector } from "hooks";
import { selectPromoProducts } from "store/slices/productSlice";

import styles from "./PromoProductsSection.module.scss";

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

        <div className={styles.menu}>
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default PromoProductsSection;
