import { menuItem } from "@/types";
import MenuItem from "./OrderItem";

const OrderList = ({ title, items }: { title: string; items: menuItem[] }) => {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="heading-sm">{title}</h2>
      <div className="grid grid-cols-3 justify-stretch gap-4 ">
        {items.map((item, i) => (
          <MenuItem item={item} key={item.name + i} />
        ))}
      </div>
    </div>
  );
};

export default OrderList;
