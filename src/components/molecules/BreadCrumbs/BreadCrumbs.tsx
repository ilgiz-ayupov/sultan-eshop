import React from "react";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

import styles from "./BreadCrumbs.module.scss";

type LinkType = {
  name: string;
  href?: string;
  isActive?: boolean;
};

interface BreadCrumbsProps {
  links: LinkType[];
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ links }) => {
  return (
    <div className="container">
      <ul className={styles.menu}>
        <li className={styles.menu__item}>
          <Link className={styles.menu__link} to="/">
            Главная
          </Link>
        </li>
        {links.map((link) => (
          <li className={styles.menu__item} key={nanoid()}>
            {!link.isActive && typeof link.href === "string" ? (
              <Link className={styles.menu__link} to={link.href}>
                {link.name}
              </Link>
            ) : (
              link.name
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreadCrumbs;
