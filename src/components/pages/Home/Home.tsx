import React from "react";

import { CategoriesSection } from "components/organisms";
import { BaseTemplate } from "components/templates";

import HeroSection from "./HeroSection/HeroSection";
import PromoProductsSection from "./PromoProductsSection/PromoProductsSection";
import ContactsSection from "./ContactsSection/ContactsSection";

const Home: React.FC = () => {
  return (
    <BaseTemplate>
      <HeroSection />
      <PromoProductsSection />
      <CategoriesSection />
      <ContactsSection />
    </BaseTemplate>
  );
};

export default Home;
