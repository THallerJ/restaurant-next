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
    <div className="flex flex-col gap-8">
      <MenuList items={starterItems} title="Starters" />
      <MenuList items={breakfastItems} title="Breakfast" />
      <MenuList items={lunchItems} title="Lunch" />
      <MenuList items={dinnerItems} title="Dinner" />
      <MenuList items={drinkItems} title="Drinks" />
    </div>
  );
};

export default Order;
