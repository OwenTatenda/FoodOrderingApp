import React from "react";
import styles from "./HeroModal.module.css";

const HeroModal = () => {
  return (
    <div className={styles["hero-modal"]}>
      <h2 className={styles["title"]}>Delicious Food, Delivered To You</h2>
      <p className={styles["first-message"]}>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p className={styles["second-message"]}>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </div>
  );
};

export default HeroModal;
