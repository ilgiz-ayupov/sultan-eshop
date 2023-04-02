import React from "react";

import { Section } from "components/atoms";

import { ReactComponent as LocationIcon } from "assets/icons/location.svg";
import { ReactComponent as PaperIcon } from "assets/icons/paper.svg";
import styles from "./ContactsSection.module.scss";

const ContactsSection: React.FC = () => {
  return (
    <Section id="contacts">
      <div className="container">
        <div className={styles.contacts}>
          <div className={styles.contacts__box}>
            <div className={styles.contacts__header}>
              <h3 className={styles.contacts__title}>Контакты</h3>
              <p className={styles.contacts__desc}>
                Оптовый поставщик «Султан»
              </p>
            </div>

            <div className={styles.contacts__menu}>
              <div className={styles["contact-block"]}>
                <h4
                  className={styles["contact-block__title"]}
                  style={{ marginLeft: "1.8rem" }}
                >
                  Адрес:
                </h4>
                <div className={styles["contact-block__body"]}>
                  <LocationIcon
                    className={styles["contact-block__icon"]}
                    width={20}
                    height={20}
                  />
                  <div className={styles["contact-block__info"]}>
                    <p>г. Кокчетав, ул. Ж. Ташенова 129Б</p>
                    <p>(Рынок Восточный)</p>
                  </div>
                </div>
              </div>

              <div className={styles["contact-block"]}>
                <h4 className={styles["contact-block__title"]}>
                  Отдел продаж:
                </h4>
                <div className={styles["contact-block__body"]}>
                  <div className={styles["contact-block__info"]}>
                    <p>+7 (777) 490-00-91</p>
                    <p>opt.sultan@mail.ru</p>
                  </div>
                </div>
              </div>

              <div className={styles["contact-block"]}>
                <h4
                  className={styles["contact-block__title"]}
                  style={{ marginLeft: "1.8rem" }}
                >
                  Данные налогоплательщика:
                </h4>
                <div className={styles["contact-block__body"]}>
                  <PaperIcon
                    className={styles["contact-block__icon"]}
                    width={20}
                    height={20}
                  />
                  <div className={styles["contact-block__info"]}>
                    <p>ИП Катран Д.С.</p>
                    <p>ИИН: 860113450858</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactsSection;
