import { drinkItems } from "@/constants";
import MenuList from "../components/MenuList";
import MenuListHeading from "../components/MenuListHeading";

const page = () => {
  return (
    <div>
      <MenuListHeading title="Drinks">
        <MenuList items={drinkItems} />
      </MenuListHeading>
    </div>
  );
};

export default page;
