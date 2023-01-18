import React, { createContext } from "react";

const items = [
  {
    name: "Sushi",
    about: "Finest fish and veggies",
    price: 22.99,
  },
  {
    name: "Schnitzel",
    about: "A german speciality",
    price: 16.55,
  },
  {
    name: " Barbecue Burger",
    about: "American, raw, meaty",
    price: 12.99,
  },
  {
    name: "Green Bowl",
    about: "Healthy...and green...",
    price: 18.99,
  },
];

export const MenuContext = createContext();

const MenuProvider = (props) => {
  return (
    <MenuContext.Provider value={{ items }}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
