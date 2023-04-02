import React from "react";
import cn from "classnames";

import styles from "./FormControl.module.scss";

interface FormControlProps {
  className?: string;
  children: React.ReactNode;
}

const FormControl: React.FC<FormControlProps> = ({ className, children }) => {
  const formControlClasses = cn(styles["form-control"], className);

  return <div className={formControlClasses}>{children}</div>;
};

export default FormControl;
