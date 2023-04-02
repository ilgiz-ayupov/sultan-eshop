import React from "react";
import cn from "classnames";

import { ReactComponent as LocationIcon } from "assets/icons/location.svg";
import { ReactComponent as MailIcon } from "assets/icons/mail.svg";

import styles from "./Contacts.module.scss";

interface ContactsProps {
  className?: string;
}

const Contacts: React.FC<ContactsProps> = ({ className }) => {
  const contactsClasses = cn(styles.contacts, className);

  return (
    <ul className={contactsClasses}>
      <li className={styles.contacts__item}>
        <div className={styles.contact}>
          <LocationIcon />
          <div className={styles.contact__info}>
            <div>
              <strong>г. Кокчетав, ул. Ж. Ташенова 129Б</strong>
            </div>
            <p>(Рынок Восточный)</p>
          </div>
        </div>
      </li>
      <li className={styles.contacts__item}>
        <div className={styles.contact}>
          <MailIcon />

          <div className={styles.contact__info}>
            <div>
              <strong>opt.sultan@mail.ru</strong>
            </div>
            <p>На связи в любое время</p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Contacts;
