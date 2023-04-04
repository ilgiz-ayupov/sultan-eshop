import React from "react";
import cn from "classnames";

import styles from "./EmptyMenuTitle.module.scss";

interface Props {
  children: string;
  className?: string;
}

const EmptyMenuTitle: React.FC<Props> = ({ className, children }) => {
  const titleClasses = cn(styles.title, className);

  return <h4 className={titleClasses}>{children}</h4>;
};

export default EmptyMenuTitle;
