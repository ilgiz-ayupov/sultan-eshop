import React from "react";

import { Logo, Button, IconButton } from "components/atoms";
import { CallCenterCard, CartButton, SearchForm } from "components/molecules";

import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";

import { ReactComponent as CatalogIcon } from "assets/icons/catalog.svg";
import { ReactComponent as DownloadIcon } from "assets/icons/download.svg";
import { ReactComponent as MenuIcon } from "assets/icons/menu.svg";
import { ReactComponent as XIcon } from "assets/icons/x-mark.svg";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);

  function toggleDrawerMenuHandler() {
    setDrawerIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <HeaderTop />
      <header className={styles.header}>
        <div className="container">
          <div className={styles.header__row}>
            <IconButton
              className={styles["header__burger-btn"]}
              tag="button"
              type="button"
              onClick={toggleDrawerMenuHandler}
            >
              {drawerIsOpen ? <XIcon /> : <MenuIcon />}
            </IconButton>

            <Logo className={styles.header__logo} />

            <div className={styles["header__catalog"]}>
              <Button
                className={styles["header__catalog-btn"]}
                tag="a"
                href="/catalog"
                icon={<CatalogIcon />}
              >
                Каталог
              </Button>

              <IconButton
                className={styles["header__catalog-btn--mobile"]}
                tag="a"
                href="/catalog"
              >
                <CatalogIcon />
              </IconButton>
            </div>

            <SearchForm className={styles["header__search-form"]} />

            <CallCenterCard
              className={styles["header__callcenter-card"]}
              showOperator
            />

            <div className={styles["header__pricelist"]}>
              <Button
                className={styles["header__pricelist-btn"]}
                tag="a"
                href="/"
                icon={<DownloadIcon />}
              >
                Прайс-лист
              </Button>

              <IconButton
                className={styles["header__pricelist-btn--mobile"]}
                tag="a"
                href="/"
              >
                <DownloadIcon />
              </IconButton>
            </div>

            <CartButton className={styles["header__cart-btn"]} />
          </div>
        </div>
      </header>
      <HeaderBottom />
    </>
  );
};

export default Header;
