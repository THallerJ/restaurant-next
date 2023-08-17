import { dinnerItems } from "@/constants";
import MenuList from "../components/MenuList";

const page = () => {
  return <MenuList items={dinnerItems} title="Dinner" />;
};

export default page;
