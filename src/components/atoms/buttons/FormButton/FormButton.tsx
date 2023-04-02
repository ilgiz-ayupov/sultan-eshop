import React from "react";
import cn from "classnames";

import IconButton from "../IconButton/IconButton";
import { HTMLButtonTypeAttribute } from "../types";
import styles from "./FormButton.module.scss";

interface FormButtonProps {
  type: HTMLButtonTypeAttribute;
  className?: string;
  children: React.ReactNode;
}

const FormButton: React.FC<FormButtonProps> = ({
  className,
  type,
  children,
}) => {
  const btnClasses = cn(styles["form-btn"], className);

  return (
    <IconButton className={btnClasses} tag="button" type={type}>
      {children}
    </IconButton>
  );
};

export default FormButton;
