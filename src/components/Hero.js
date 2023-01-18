import React from "react";
import styles from "./Hero.module.css";
import HeroModal from "./HeroModal";

const Hero = () => {
  return (
    <div className={styles["hero"]}>
      <HeroModal></HeroModal>
    </div>
  );
};

export default Hero;
