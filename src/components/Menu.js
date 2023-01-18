import React, { useContext, useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import styles from "./Menu.module.css";
import { MenuContext } from "./MenuContext";

const Menu = (props) => {
  const { items } = useContext(MenuContext);

  return (
    <div className={styles["menu"]}>
      {items.map((item, i) => (
        <MenuItem
          item={item}
          key={i}
          id={i}
          name={item.name}
          price={item.price}
          about={item.about}
        ></MenuItem>
      ))}
    </div>
  );
};

export default Menu;
