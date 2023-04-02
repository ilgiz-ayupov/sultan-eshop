import React from "react";
import cn from "classnames";

import styles from "./PageTitle.module.scss";

interface PageTitleProps {
  className?: string;
  children: React.ReactNode;
}

const PageTitle: React.FC<PageTitleProps> = ({ className, children }) => {
  const titleClasses = cn(styles.title, className);

  return <h1 className={titleClasses}>{children}</h1>;
};

export default PageTitle;
