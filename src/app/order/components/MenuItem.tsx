import React from "react";
import { menuItem } from "@/types";

const MenuItem = ({ item }: { item: menuItem }) => {
  return (
    <div className="m-2 flex h-48 w-48 flex-col bg-red-400">
      <span>{item.name}</span>
      <span>{item.details}</span>
    </div>
  );
};

export default MenuItem;
