import React from "react";

import { Header, Footer } from "components/organisms/";

interface BaseTemplateProps {
  children: React.ReactNode;
}

const BaseTemplate: React.FC<BaseTemplateProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default BaseTemplate;
