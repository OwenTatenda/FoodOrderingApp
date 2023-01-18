import "./App.css";
import React, { useContext, useEffect, useReducer, useState } from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Menu from "./components/Menu";
import MenuProvider from "./components/MenuContext";
import CartModal from "./components/CartModal";
import CartProvider from "./components/CartContext";

function App() {
  const [closeModal, setCloseModal] = useState(null);

  return (
    <div className="App">
      <MenuProvider>
        <CartProvider>
          <Header openCartFunction={setCloseModal}></Header>
          <Hero></Hero>
          <Menu></Menu>
          {closeModal === true && (
            <CartModal closeCartFunction={setCloseModal}></CartModal>
          )}
        </CartProvider>
      </MenuProvider>
    </div>
  );
}

export default App;
