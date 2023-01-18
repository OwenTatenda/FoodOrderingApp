import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const { cartContext } = useContext(CartContext);

  const deleteItemHandler = () => {
    cartContext.removeItem(props.id);
  };

  if (props.amount === 0) {
    return;
  }

  return (
    <div className={styles["cart-item"]}>
      <div className={styles["name-buttons"]}>
        <p className={styles["name"]}>{props.name}</p>
        <div className={styles["btns"]}>
          <button className={styles["minus"]} onClick={deleteItemHandler}>
            -
          </button>
          <button className={styles["add"]}>+</button>
        </div>
      </div>
      <div className={styles["price-amount"]}>
        <p className={styles["price"]}>${props.price}</p>
        <h4 className={styles["amount"]}>x{props.amount}</h4>
      </div>
    </div>
  );
};

export default CartItem;
