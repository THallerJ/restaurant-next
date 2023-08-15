import React from "react";
import MenuList from "./MenuList";
import {
  starterItems,
  breakfastItems,
  lunchItems,
  dinnerItems,
  drinkItems,
} from "@/constants";

const Order = () => {
  return (
    <div>
      <h2 className="heading">Starters</h2>
      <MenuList items={starterItems} />
      <h2 className="heading">Breakfast</h2>
      <MenuList items={breakfastItems} />
      <h2 className="heading">Lunch</h2>
      <MenuList items={lunchItems} />
      <h2 className="heading">Dinner</h2>
      <MenuList items={dinnerItems} />
      <h2 className="heading">Drinks</h2>
      <MenuList items={drinkItems} />
    </div>
  );
};

export default Order;
