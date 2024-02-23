import { menuItem } from "@/types";
import MenuItem from "./OrderItem";

const OrderList = ({
  title,
  items,
  id,
}: {
  title: string;
  items: menuItem[];
  id: string;
}) => {
  return (
    <section className="flex flex-col gap-1" id={id}>
      <h2 className="heading-sm">{title}</h2>
      <div className="grid grid-cols-1 justify-stretch gap-4 xsm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <MenuItem item={item} key={item.name + i} />
        ))}
      </div>
    </section>
  );
};

export default OrderList;
