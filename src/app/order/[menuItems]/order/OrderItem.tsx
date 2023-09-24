import { menuItem } from "@/types";
import Image from "next/image";
import AddButton from "./AddButton";

type OrderItemProps = {
  item: menuItem;
  children?: React.ReactNode;
  large?: boolean;
};

const OrderItem = ({ item, children, large }: OrderItemProps) => {
  const SmallCard = () => {
    return (
      <div
        className="flex w-full flex-col justify-between gap-2 rounded-lg
        bg-white p-2 text-dark shadow-md"
      >
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            className="h-64 rounded-lg object-cover"
          />
        ) : null}
        <div>
          <div className="flex w-full flex-row justify-between pb-1">
            <span className="font-semibold">{item.name}</span>
            <span className="font-semibold">{`$${item.price}`}</span>
          </div>
          {children ? children : <p className="h-12 text-xs">{item.details}</p>}
        </div>
        <AddButton item={item} />
      </div>
    );
  };

  const LargeCard = () => {
    return (
      <div>
        <div className="hidden flex-col sm:flex">
          <div className="flex flex-row gap-4 rounded-lg bg-white p-2 shadow-md">
            {item.image ? (
              <Image
                src={item.image}
                className="w-2/5 rounded-lg object-cover md:w-1/3 lg:w-1/5"
                alt="daily-special"
              />
            ) : null}
            <div className="flex flex-col justify-between gap-2">
              <div className="flex justify-between">
                <h4 className="text-xl font-semibold text-dark">{item.name}</h4>
                <span className="text-xl font-semibold text-dark">{`$${item.price}`}</span>
              </div>
              <p>{item.details}</p>
              <div className="flex justify-end">
                <AddButton item={item} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:hidden">{<SmallCard />}</div>
      </div>
    );
  };

  return <div>{large ? <LargeCard /> : <>{<SmallCard />}</>}</div>;
};

export default OrderItem;
