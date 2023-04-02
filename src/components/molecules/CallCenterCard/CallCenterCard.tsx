import React from "react";
import cn from "classnames";

import operatorImg from "assets/images/operator.png";
import styles from "./CallCenterCard.module.scss";

interface CallCenterCardProps {
  className?: string;
  textDirection?: "left" | "right";
  showOperator?: boolean;
}

const CallCenterCard: React.FC<CallCenterCardProps> = ({
  className,
  textDirection = "right",
  showOperator = false,
}) => {
  const cardClasses = cn(styles.card, className);

  const contentClasses = cn({
    [styles["content--left"]]: textDirection === "left",
    [styles["content--right"]]: textDirection === "right",
  });

  return (
    <div className={cardClasses}>
      <div className={contentClasses}>
        <div>
          <strong className={styles.card__phone}>+7 (777) 490-00-91</strong>
        </div>
        <div className={styles.card__worktime}>время работы: 9:00-20:00</div>
        <a className={styles.card__call} href="tel:+7(777)490-00-91">
          Заказать звонок
        </a>
      </div>
      {showOperator && (
        <div className={styles.card__operator}>
          <img src={operatorImg} alt="operator" />
        </div>
      )}
    </div>
  );
};

export default CallCenterCard;
