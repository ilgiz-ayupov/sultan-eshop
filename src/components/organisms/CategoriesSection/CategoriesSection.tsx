import React from "react";

import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDesc,
  CategoriesMenu,
} from "components/atoms";

const CategoriesSection: React.FC = () => {
  return (
    <Section id="categories">
      <div className="container">
        <SectionHeader>
          <SectionTitle>
            <span className="accent">категории</span> товаров
          </SectionTitle>
          <SectionDesc>
            10 000+ ходовых позиций по спецмальным ценам
          </SectionDesc>
        </SectionHeader>

        <CategoriesMenu />
      </div>
    </Section>
  );
};

export default CategoriesSection;
