import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

import { ReactComponent as LogoIcon } from "assets/icons/logo.svg";
import styles from "./Logo.module.scss";

interface LogoProps {
  className?: string;
  color?: "white" | "blue";
}

const Logo: React.FC<LogoProps> = ({ className, color = "blue" }) => {
  const linkClasses = cn(styles.link, className, {
    [styles["logo--blue"]]: color === "blue",
    [styles["logo--white"]]: color === "white",
  });

  return (
    <Link className={linkClasses} to="/">
      <LogoIcon className={styles.logo} />
    </Link>
  );
};

export default Logo;
