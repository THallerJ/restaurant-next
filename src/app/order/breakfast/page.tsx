import { breakfastItems } from "@/constants";
import MenuList from "../components/MenuList";
import MenuListHeading from "../components/MenuListHeading";

const page = () => {
  return (
    <div>
      <MenuListHeading title="Breakfast">
        <MenuList items={breakfastItems} />
      </MenuListHeading>
    </div>
  );
};

export default page;
