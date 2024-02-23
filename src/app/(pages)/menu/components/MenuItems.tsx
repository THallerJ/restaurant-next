import { menuItem } from "@/types";

type MenuItemsProps = {
  title: string;
  menuItems: menuItem[];
  scrollRef?: React.MutableRefObject<HTMLDivElement | null>;
  id: string;
};

const MenuItems = ({ title, menuItems, scrollRef, id }: MenuItemsProps) => {
  return (
    <section
      className="bordered flex flex-col gap-4 p-4"
      ref={scrollRef}
      id={id}
    >
      <h2 className="heading-sm">{title}</h2>
      <div className="flex flex-col gap-5">
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
    </section>
  );
};

export default MenuItems;
