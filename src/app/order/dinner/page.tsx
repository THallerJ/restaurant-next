import { dinnerItems } from "@/constants";
import MenuList from "../components/MenuList";

const page = () => {
  return (
    <div>
      <MenuList items={dinnerItems} />
    </div>
  );
};

export default page;
