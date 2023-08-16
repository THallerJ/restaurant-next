import React from "react";
import { lunchItems } from "@/constants";
import MenuList from "../components/MenuList";
import MenuListHeading from "../components/MenuListHeading";

const page = () => {
  return (
    <div>
      <MenuListHeading title="Lunch">
        <MenuList items={lunchItems} />
      </MenuListHeading>
    </div>
  );
};

export default page;
