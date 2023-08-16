import React from "react";
import { menuItem } from "@/types";
import Image from "next/image";

const MenuItem = ({ item }: { item: menuItem }) => {
  return (
    <div className="flex h-64 w-64 flex-col justify-end rounded-lg bg-second p-2 shadow-md">
      {item.image ? <Image src={item.image} alt={item.name} /> : null}
      <span className="font-semibold text-dark">{item.name}</span>
      <span className="text-sm text-dark">{item.details}</span>
    </div>
  );
};

export default MenuItem;
