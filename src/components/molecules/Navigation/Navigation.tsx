import React from "react";
import cn from "classnames";

import styles from "./Navigation.module.scss";

interface NavigationProps {
  className?: string;
  showTitle?: boolean;
  direction: "horizontal" | "vertical";
}

const Navigation: React.FC<NavigationProps> = ({
  className,
  showTitle = false,
  direction = "vertical",
}) => {
  const navClasses = cn(styles.nav, className);

  const menuClasses = cn(styles.menu, {
    [styles["menu--horizontal"]]: direction === "horizontal",
    [styles["menu--vertical"]]: direction === "vertical",
  });

  return (
    <div className={navClasses}>
      {showTitle && <h3 className={styles.title}>Меню сайта:</h3>}
      <ul className={menuClasses}>
        <li className={styles.menu__item}>
          <a className={styles.menu__link} href="/">
            О компании
          </a>
        </li>
        <li className={styles.menu__item}>
          <a className={styles.menu__link} href="/">
            Доставка и оплата
          </a>
        </li>
        <li className={styles.menu__item}>
          <a className={styles.menu__link} href="/">
            Возврат
          </a>
        </li>
        <li className={styles.menu__item}>
          <a className={styles.menu__link} href="/">
            Контакты
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
