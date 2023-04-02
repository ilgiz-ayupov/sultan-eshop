import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

import {
  ButtonTypeTag,
  HTMLButtonTypeAttribute,
  ButtonSizeType,
} from "../types";
import styles from "./Button.module.scss";

interface ButtonProps {
  tag: ButtonTypeTag;
  size?: ButtonSizeType;
  className?: string;
  type?: HTMLButtonTypeAttribute;
  href?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const btnClasses = cn(styles.btn, props.className, {
    [styles["btn--small"]]: props.size === "small",
    [styles["btn--big"]]: props.size === "big",
  });

  if (props.tag === "button" && typeof props.type === "string") {
    return (
      <button className={btnClasses} onClick={props.onClick}>
        <span>{props.children}</span>
        {!!props.icon && props.icon}
      </button>
    );
  } else if (props.tag === "a" && typeof props.href === "string") {
    return (
      <Link className={btnClasses} to={props.href} onClick={props.onClick}>
        <span>{props.children}</span>
        {!!props.icon && props.icon}
      </Link>
    );
  } else {
    return null;
  }
};

export default Button;
