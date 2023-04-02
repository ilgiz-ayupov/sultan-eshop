import React from "react";

import BenefitsBlock from "./BenefitsBlock/BenefitsBlock";
import { Button, Section } from "components/atoms";

import heroBg from "assets/images/hero-bg.jpg";
import heroMobileBg from "assets/images/hero-mobile-bg.jpg";
import styles from "./HeroSection.module.scss";

const HeroSection: React.FC = () => {
  return (
    <Section id="hero">
      <div className={styles.hero}>
        <img className={styles.hero__bg} src={heroBg} alt="" />
        <img className={styles["hero__mobile-bg"]} src={heroMobileBg} alt="" />

        <div className="container">
          <div className={styles.hero__row}>
            <div className={styles.hero__content}>
              <h1 className={styles.hero__title}>
                Бытовая химия, <br />
                косметика <br />и хозтовары
              </h1>
              <p className={styles.hero__desc}>оптом по кокчетаву и области</p>
              <Button
                className={styles["hero__catalog-btn"]}
                tag="a"
                href="/catalog"
                size="big"
              >
                В каталог
              </Button>

              <BenefitsBlock className={styles["benefits-desktop"]} />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <BenefitsBlock className={styles["benefits-mobile"]} />
      </div>
    </Section>
  );
};

export default HeroSection;
