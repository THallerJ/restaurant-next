import { menuItem } from "@/types";
import MenuItem from "./MenuItem";

const MenuList = ({ title, items }: { title: string; items: menuItem[] }) => {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="heading-sm text-center xxl:text-start">{title}</h2>
      <div className="flex flex-row flex-wrap justify-center gap-4 xxl:justify-start">
        {items.map((item, i) => (
          <MenuItem item={item} key={item.name + i} />
        ))}
      </div>
    </div>
  );
};

export default MenuList;
