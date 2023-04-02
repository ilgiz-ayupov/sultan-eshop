import React from "react";
import cn from "classnames";

import styles from "./BenefitsBlock.module.scss";

interface BenefitsBlockProps {
  className?: string;
}

const BenefitsBlock: React.FC<BenefitsBlockProps> = ({ className }) => {
  const menuClasses = cn(styles.benefits, className);

  return (
    <ul className={menuClasses}>
      <li className={styles.benefits__item}>
        <div className={styles.benefits__marker}>+</div>
        <p className={styles.benefits__content}>
          Только самые <br />
          выгодные предложения
        </p>
      </li>
      <li className={styles.benefits__item}>
        <div className={styles.benefits__marker}>+</div>
        <p className={styles.benefits__content}>
          Бесплатная доставка <br />
          по{" "}
          <strong>
            Кокчетаву от <span style={{ whiteSpace: "nowrap" }}>10 тыс ₸</span>
          </strong>
        </p>
      </li>
    </ul>
  );
};

export default BenefitsBlock;
