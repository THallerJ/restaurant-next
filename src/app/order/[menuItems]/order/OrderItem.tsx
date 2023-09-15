"use client";
import { menuItem } from "@/types";
import Image from "next/image";
import { useOrder } from "../../contexts/OrderContext";
import { AnimatedButton } from "@/components";

type OrderItemProps = {
  item: menuItem;
  children?: React.ReactNode;
  large?: boolean;
};

const OrderItem = ({ item, children, large }: OrderItemProps) => {
  {
    /**
     * Tried to pass cartDispatch and onClick from OrderItem into subcomponents, but this breaks
     * AnimatedButton for some reason
     */
  }
  const SmallCard = () => {
    const { cartDispatch } = useOrder();
    return (
      <div className="flex w-full flex-col rounded-lg bg-white p-2 text-dark shadow-md">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            className="h-64 rounded-lg object-cover pb-3"
          />
        ) : null}
        <div className="flex w-full flex-row justify-between pb-1">
          <span className="font-semibold">{item.name}</span>
          <span className="font-semibold">{`$${item.price}`}</span>
        </div>
        {children ? children : <p className="h-12 text-xs">{item.details}</p>}
        <AnimatedButton
          onClick={() => cartDispatch({ type: "add", payload: item })}
          fullSize
        >
          add to cart
        </AnimatedButton>
      </div>
    );
  };

  const LargeCard = () => {
    const { cartDispatch } = useOrder();
    return (
      <div>
        <div className="hidden flex-col sm:flex">
          <div className="flex h-64 flex-row gap-4 rounded-lg bg-white p-2 shadow-md">
            {item.image ? (
              <Image
                src={item.image}
                className="w-[20%] rounded-lg object-cover"
                alt="daily-special"
              />
            ) : null}
            <div className="flex h-full flex-col justify-between">
              <div className="flex justify-between">
                <h4 className="text-xl font-semibold text-dark">{item.name}</h4>
                <span className="text-xl font-semibold text-dark">{`$${item.price}`}</span>
              </div>
              <p>{item.details}</p>
              <div className="flex justify-end">
                <AnimatedButton
                  onClick={() => cartDispatch({ type: "add", payload: item })}
                >
                  Add to cart
                </AnimatedButton>
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
