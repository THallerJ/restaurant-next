import React from "react";
import { menuItem } from "@/types";

const MenuItem = ({ item }: { item: menuItem }) => {
  return <div>{item.name}</div>;
};

export default MenuItem;
