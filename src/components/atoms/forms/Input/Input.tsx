import React from "react";
import cn from "classnames";

import styles from "./Input.module.scss";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  name: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  className?: string;
}

const Input: React.FC<InputProps> = (props) => {
  const inputClasses = cn(styles.input, props.className);

  return <input className={inputClasses} {...props} />;
};

export default Input;
