import React from "react";
import { menuItem } from "@/types";
import Image from "next/image";

const MenuItem = ({ item }: { item: menuItem }) => {
  return (
    <div className="flex  w-64 flex-col justify-between gap-3 rounded-xl bg-white p-3 shadow-md">
      {item.image ? (
        <Image src={item.image} alt={item.name} className="rounded-lg" />
      ) : null}
      <div className="h-full">
        <span className="font-semibold text-dark">{item.name}</span>
        <p className="text-xs text-dark">{item.details}</p>
      </div>
    </div>
  );
};

export default MenuItem;
