import { menuItem } from "@/types";
import MenuItem from "./MenuItem";

const MenuList = ({ items }: { items: menuItem[] }) => {
  return (
    <>
      {items.map((item, i) => (
        <MenuItem item={item} key={item.name + i} />
      ))}
    </>
  );
};

export default MenuList;
