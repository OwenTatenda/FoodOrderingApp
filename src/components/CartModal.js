import React, { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import classes from "./CartModal.module.css";
import CartItem from "./CartItem";
import { CartContext } from "./CartContext";

const Backdrop = (props) => {
  const closeCartHandler = () => {
    props.passOnFunction((prev) => {
      return false;
    });
  };
  return <div className={classes["backdrop"]} onClick={closeCartHandler}></div>;
};

const Cart = (props) => {
  const { cartContext } = useContext(CartContext);

  const closemodalHandler = () => {
    props.getFunction((prev) => {
      return false;
    });
  };

  return (
    <div className={classes["cart"]}>
      {cartContext.items?.map((item, i) => (
        <CartItem
          name={item.name}
          price={item.price}
          amount={item.amount}
          item={item}
          id={item.id}
          key={i}
        ></CartItem>
      ))}
      <div className={classes["title-price-btns"]}>
        <div className={classes["title-price"]}>
          <div className={classes["title"]}>Total Amount</div>
          <h3 className={classes["price"]}>${cartContext.totalAmount}</h3>
        </div>
        <div className={classes["btns"]}>
          <button className={classes["close-btn"]} onClick={closemodalHandler}>
            Close
          </button>
          <button className={classes["order-btn"]}>Order</button>
        </div>
      </div>
    </div>
  );
};

const CartModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop passOnFunction={props.closeCartFunction} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <Cart getFunction={props.closeCartFunction} />,
        document.getElementById("cart")
      )}
    </Fragment>
  );
};

export default CartModal;
