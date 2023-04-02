import React from "react";
import cn from "classnames";

import styles from "./Form.module.scss";

interface FormProps extends React.HTMLProps<HTMLFormElement> {
  className?: string;
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = (props) => {
  const formClasses = cn(styles.form, props.className);
  
  return (
    <form className={formClasses} {...props}>
      {props.children}
    </form>
  );
};

export default Form;
