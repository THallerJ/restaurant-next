import { menuItem } from "@/types";
import MenuItem from "./MenuItem";

const MenuList = ({ items }: { items: menuItem[] }) => {
  return (
    <div className="flex flex-row flex-wrap gap-4 ">
      {items.map((item, i) => (
        <MenuItem item={item} key={item.name + i} />
      ))}
    </div>
  );
};

export default MenuList;
