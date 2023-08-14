import { drinkItems } from "@/constants";
import MenuList from "../components/MenuList";

const page = () => {
  return (
    <div>
      <MenuList items={drinkItems} />
    </div>
  );
};

export default page;
