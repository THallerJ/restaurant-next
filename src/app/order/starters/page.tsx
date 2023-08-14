import { starterItems } from "@/constants";
import MenuList from "../components/MenuList";

const page = () => {
  return (
    <div>
      <MenuList items={starterItems} />
    </div>
  );
};

export default page;
