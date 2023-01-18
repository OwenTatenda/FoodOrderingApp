import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  items: [],
  totalAmount: 0,
};

const reducerFunction = (state, action) => {
  let updatedItems = [];
  let updatedTotalAmount = 0;
  if (action.type === "add-item") {
    let index = state.items.findIndex(
      (item, i) => item.id === action.payload.id
    );
    if (index === -1) {
      updatedItems = state.items.concat(action.payload);
      updatedTotalAmount =
        Number(state.totalAmount) +
        Number(action.payload.price) * Number(action.payload.amount);
      let finalTotal1 = Number(updatedTotalAmount).toFixed(2);
      return {
        items: updatedItems,
        totalAmount: finalTotal1,
      };
    } else if (index !== -1) {
      let existingItem = state.items[index];
      let newItemsList = [];
      const newItem = {
        id: existingItem.id,
        name: existingItem.name,
        price: existingItem.price,
        amount: Number(existingItem.amount) + Number(action.payload.amount),
      };
      newItemsList = [...state.items];
      newItemsList[index] = newItem;
      updatedItems = newItemsList;
      updatedTotalAmount =
        Number(state.totalAmount) +
        Number(action.payload.price) * Number(action.payload.amount);
      let finalTotal2 = Number(updatedTotalAmount).toFixed(2);
      return {
        items: updatedItems,
        totalAmount: finalTotal2,
      };
    }
  } else if (action.type === "remove-item") {
    let findItemIndex = state.items.findIndex(
      (item, i) => item.id === action.payload
    );

    let getItem = state.items[findItemIndex];

    let newAmount = +getItem?.amount - 1;
    let amountNew = newAmount < 0 ? 0 : newAmount;
    let newItem = {
      id: getItem?.id,
      name: getItem?.name,
      price: +getItem?.price,
      amount: amountNew,
    };
    let newList = [];
    newList = [...state.items];
    newList[findItemIndex] = newItem;
    updatedItems = newList;
    updatedTotalAmount = Number(state.totalAmount) - Number(getItem?.price);
    let finalTotal3 =
      updatedTotalAmount < 0 ? 0 : Number(updatedTotalAmount).toFixed(2);
    return {
      items: updatedItems,
      totalAmount: finalTotal3,
    };
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(reducerFunction, initialState);

  const addItemToCartHandler = (item) => {
    dispatchCart({ type: "add-item", payload: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCart({ type: "remove-item", payload: id });
  };

  const cartContext = {
    items: cartState?.items,
    totalAmount: cartState?.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={{ cartContext }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
