import { breakfastItems } from "@/constants";
import MenuList from "../components/MenuList";

const page = () => {
  return (
    <div>
      <MenuList items={breakfastItems} />
    </div>
  );
};

export default page;
