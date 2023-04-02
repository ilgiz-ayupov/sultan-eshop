import React from "react";
import cn from "classnames";

import { Logo, Button } from "components/atoms";
import {
  CallCenterCard,
  SocialsMenu,
  SubscribeForm,
  BankCardsMenu,
} from "components/molecules";

import { ReactComponent as DownloadIcon } from "assets/icons/download.svg";

import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__row}>
          <div className={cn(styles["first-col"], styles["footer__first-col"])}>
            <div className={styles["first-col__header"]}>
              <Logo className={styles["first-col__logo"]} color="white" />
              <Button
                className={styles["first-col__price-list-btn"]}
                tag="a"
                href="/"
                size="small"
                icon={<DownloadIcon />}
              >
                Прайс-лист
              </Button>
            </div>

            <p className={styles["first-col__desc"]}>
              Компания «Султан» — снабжаем
              <br />
              розничные магазины товарами
              <br /> "под ключ" в Кокчетаве и Акмолинской
              <br /> области
            </p>

            <SubscribeForm className={styles["first-col__subscribe-form"]} />
          </div>

          <div className={cn(styles.col, styles.footer__col)}>
            <h4 className={styles.col__title}>Меню сайта:</h4>
            <ul>
              <li className={styles.col__item}>
                <a className={styles.col__link} href="/">
                  О компании
                </a>
              </li>
              <li className={styles.col__item}>
                <a className={styles.col__link} href="/">
                  Доставка и оплата
                </a>
              </li>
              <li className={styles.col__item}>
                <a className={styles.col__link} href="/">
                  Возврат
                </a>
              </li>
              <li className={styles.col__item}>
                <a className={styles.col__link} href="/">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div className={cn(styles.col, styles.footer__col)}>
            <h4 className={styles.col__title}>Категории:</h4>
            <ul>
              <li className={styles.col__item}>
                <a className={styles.col__link} href="/">
                  Бытовая химия
                </a>
              </li>
              <li className={styles.col__item}>
                <a className={styles.col__link} href="/">
                  Косметика и гигиена
                </a>
              </li>
              <li className={styles.col__item}>
                <a className={styles.col__link} href="/">
                  Товары для дома
                </a>
              </li>
              <li className={styles.col__item}>
                <a className={styles.col__link} href="/">
                  Товары для детей и мам
                </a>
              </li>
              <li className={styles.col__item}>
                <a className={styles.col__link} href="/">
                  Посуда
                </a>
              </li>
            </ul>
          </div>

          <div
            className={cn(
              styles.col,
              styles.footer__col,
              styles["footer__price-list"]
            )}
          >
            <h4 className={styles.col__title}>Скачать прайс-лист:</h4>
            <ul>
              <li className={styles.col__item}>
                <Button
                  tag="a"
                  href="/"
                  icon={<DownloadIcon />}
                >
                  Прайс-лист
                </Button>
              </li>
              <li className={styles.col__item}>
                <SocialsMenu className={styles["footer__socials-desktop"]} />
              </li>
            </ul>
          </div>

          <div className={cn(styles.col, styles.footer__col)}>
            <h4 className={styles.col__title}>Контакты:</h4>
            <ul>
              <li className={styles.col__item}>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <CallCenterCard
                    className={styles["footer__call-center-card"]}
                    textDirection="left"
                  />
                  <SocialsMenu className={styles["footer__socials-mobile"]} />
                </div>
              </li>
              <li>
                <BankCardsMenu />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
