import React from "react";
import cn from "classnames";

import Button from "../Button/Button";
import { ButtonTypeTag, HTMLButtonTypeAttribute } from "../types";
import styles from "./IconButton.module.scss";

interface IconButtonProps {
  tag: ButtonTypeTag;
  className?: string;
  type?: HTMLButtonTypeAttribute;
  href?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
}

const IconButton: React.FC<IconButtonProps> = (props) => {
  const btnClasses = cn(styles["icon-btn"], props.className);

  return (
    <Button {...props} className={btnClasses}>
      {props.children}
    </Button>
  );
};

export default IconButton;
