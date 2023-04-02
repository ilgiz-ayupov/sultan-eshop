import React from "react";
import cn from "classnames";
import { nanoid } from "nanoid";

import SOCIALS from "data/socials.json";
import styles from "./SocialsMenu.module.scss";

interface SocialsMenuProps {
  className?: string;
}

const SocialsMenu: React.FC<SocialsMenuProps> = ({ className }) => {
  const socialsClasses = cn(styles.socials, className);

  return (
    <div className={socialsClasses}>
      <h5 className={styles.socials__title}>
        Связь <br style={{ display: "none" }} />в мессенджерах:
      </h5>
      <ul className={styles.socials__list}>
        {SOCIALS.map((social) => (
          <li key={nanoid()}>
            <a href={social.link} title={social.name}>
              <img src={social.logo} alt={social.name} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialsMenu;
