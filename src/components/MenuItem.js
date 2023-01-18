import React, { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import styles from "./MenuItem.module.css";

const MenuItem = (props) => {
  const [amountState, setAmountState] = useState("");
  const { cartContext } = useContext(CartContext);

  const getAmountHandler = (e) => {
    setAmountState(+e.target.value);
  };

  const Amount = amountState === "" ? 1 : amountState;

  const passItemHandler = () => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: +Amount,
    });
    setAmountState("");
  };

  return (
    <div className={styles["menu-item"]}>
      <div className={styles["name-amount__description"]}>
        <p className={styles["name"]}>{props.name}</p>
        <p className={styles["description"]}>{props.about}</p>
        <p className={styles["price"]}>${props.price}</p>
      </div>
      <div className={styles["amount-button"]}>
        <div className="amount">
          <label htmlFor="" className={styles.label}>
            Amount
          </label>
          <input
            type="number"
            value={amountState}
            className={styles.input}
            onChange={getAmountHandler}
          />
        </div>
        <button className={styles["button"]} onClick={passItemHandler}>
          + Add
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
