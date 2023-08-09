import { menuItem } from "@/types";

type MenuItemsProps = {
  title: string;
  menuItems: menuItem[];
};

const MenuItems = ({ title, menuItems }: MenuItemsProps) => {
  return (
    <div className="space-y-1">
      <h2 className="heading-sm text-sm">{title}</h2>
      {menuItems.map((item) => (
        <div key={item.name} className="flex justify-between">
          <div>
            <span className="font-bold uppercase text-dark">{item.name}</span>
            <span className="ml-3 text-sm text-dark">{item.details}</span>
          </div>
          <span className="ml-8">{`$${item.price}`}</span>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
