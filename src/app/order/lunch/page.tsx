import React from "react";
import { lunchItems } from "@/constants";
import MenuItem from "../components/MenuItem";
import MenuList from "../components/MenuList";

const page = () => {
  return (
    <div>
      <MenuList items={lunchItems} />
    </div>
  );
};

export default page;
