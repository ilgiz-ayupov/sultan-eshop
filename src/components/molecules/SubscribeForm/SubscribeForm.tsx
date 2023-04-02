import React from "react";
import cn from "classnames";

import { Form, FormControl, Input, FormButton } from "components/atoms";

import { ReactComponent as ArrowRightIcon } from "assets/icons/arrow-right.svg";
import styles from "./SubscribeForm.module.scss";

interface SubscribeFormProps {
  className?: string;
}

const SubscribeForm: React.FC<SubscribeFormProps> = ({ className }) => {
  const formClasses = cn(styles.form, className);

  return (
    <Form className={formClasses}>
      <h5 className={styles.form__title}>Подпишись на скидки и акции</h5>
      <FormControl>
        <Input name="email" type="email" placeholder="Введите ваш E-mail" />
        <FormButton type="submit">
          <ArrowRightIcon />
        </FormButton>
      </FormControl>
    </Form>
  );
};

export default SubscribeForm;
