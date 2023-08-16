import { dinnerItems } from "@/constants";
import MenuList from "../components/MenuList";
import MenuListHeading from "../components/MenuListHeading";

const page = () => {
  return (
    <div>
      <MenuListHeading title="Dinner">
        <MenuList items={dinnerItems} />
      </MenuListHeading>
    </div>
  );
};

export default page;
