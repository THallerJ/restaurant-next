import { breakfastItems } from "@/constants";
import MenuList from "../components/MenuList";

const page = () => {
  return <MenuList items={breakfastItems} title="Breakfast" />;
};

export default page;
