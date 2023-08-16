import React from "react";
import { menuItem } from "@/types";

const MenuItem = ({ item }: { item: menuItem }) => {
  return (
    <div className="flex h-48 w-48 flex-col justify-end rounded-lg bg-third p-2 shadow-md">
      <span className="font-semibold text-dark">{item.name}</span>
      <span className="text-sm text-dark">{item.details}</span>
    </div>
  );
};

export default MenuItem;
