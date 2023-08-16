import React from "react";
import { menuItem } from "@/types";
import Image from "next/image";

const MenuItem = ({ item }: { item: menuItem }) => {
  return (
    <div className="flex h-64 w-64 flex-col justify-between rounded-lg bg-white p-2 shadow-md">
      {item.image ? (
        <Image src={item.image} alt={item.name} className="rounded-lg" />
      ) : null}
      <div>
        <span className="font-semibold text-dark">{item.name}</span>
        <p className="text-sm text-dark">{item.details}</p>
      </div>
    </div>
  );
};

export default MenuItem;
