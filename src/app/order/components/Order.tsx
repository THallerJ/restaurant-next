import React from "react";
import MenuList from "./MenuList";
import {
  starterItems,
  breakfastItems,
  lunchItems,
  dinnerItems,
  drinkItems,
} from "@/constants";
import MenuListHeading from "./MenuListHeading";

const Order = () => {
  return (
    <div className="flex flex-col gap-4">
      <MenuListHeading title="Starters">
        <MenuList items={starterItems} />
      </MenuListHeading>
      <MenuListHeading title="Breakfast">
        <MenuList items={breakfastItems} />
      </MenuListHeading>
      <MenuListHeading title="Lunch">
        <MenuList items={lunchItems} />
      </MenuListHeading>
      <MenuListHeading title="Dinner">
        <MenuList items={dinnerItems} />
      </MenuListHeading>
      <MenuListHeading title="Drinks">
        <MenuList items={drinkItems} />
      </MenuListHeading>
    </div>
  );
};

export default Order;
