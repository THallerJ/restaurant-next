import { drinkItems } from "@/constants";
import MenuList from "../components/MenuList";

const page = () => {
  return <MenuList items={drinkItems} title="Drinks" />;
};

export default page;
