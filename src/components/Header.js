import React, { useContext } from "react";
import classes from "./Header.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "./CartContext";

const Header = (props) => {
  const { cartContext } = useContext(CartContext);

  const CartHandler = () => {
    props.openCartFunction((prev) => {
      return true;
    });
  };
  const numberOfItems = cartContext.items?.reduce((acc, item, i, items) => {
    return acc + +item.amount;
  }, 0);

  return (
    <div className={classes.header}>
      <div className={classes["website-name"]}>ReactMeals</div>
      <div className={classes["cart-section"]} onClick={CartHandler}>
        <FaShoppingCart className={classes.icon}></FaShoppingCart>
        <p className={classes["cart-name"]}>Your Cart</p>
        <p className={classes["cart-items"]}>{numberOfItems}</p>
      </div>
    </div>
  );
};

export default Header;
