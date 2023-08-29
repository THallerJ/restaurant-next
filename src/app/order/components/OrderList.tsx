import { menuItem } from "@/types";
import MenuItem from "./OrderItem";

const OrderList = ({ title, items }: { title: string; items: menuItem[] }) => {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="heading-sm text-center xxl:text-start">{title}</h2>
      <div className="flex flex-row flex-wrap justify-center gap-4 after:h-0 after:w-[30%] after:content-normal xxl:justify-between">
        {items.map((item, i) => (
          <MenuItem item={item} key={item.name + i} />
        ))}
      </div>
    </div>
  );
};

export default OrderList;
