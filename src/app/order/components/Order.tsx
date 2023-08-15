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
  const MenuListHeading = ({
    children,
    title,
  }: {
    children: React.ReactNode;
    title: string;
  }) => (
    <div className="space-y-1">
      <h2 className="heading-sm">{title}</h2>
      {children}
    </div>
  );

  return (
    <div className="flex flex-col space-y-4">
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
