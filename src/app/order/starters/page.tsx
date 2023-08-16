import { starterItems } from "@/constants";
import MenuList from "../components/MenuList";
import MenuListHeading from "../components/MenuListHeading";

const page = () => {
  return (
    <div>
      <MenuListHeading title="Starters">
        <MenuList items={starterItems} />
      </MenuListHeading>
    </div>
  );
};

export default page;
