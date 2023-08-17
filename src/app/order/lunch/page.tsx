import React from "react";
import { lunchItems } from "@/constants";
import MenuList from "../components/MenuList";

const page = () => {
  return <MenuList items={lunchItems} title="Lunch" />;
};

export default page;
