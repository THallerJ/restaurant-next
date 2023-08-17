import { starterItems } from "@/constants";
import MenuList from "../components/MenuList";

const page = () => {
  return <MenuList items={starterItems} title="Starters" />;
};

export default page;
