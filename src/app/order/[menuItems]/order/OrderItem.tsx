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
  const { cartDispatch } = useOrder();

  const onClick = () => cartDispatch({ type: "add", payload: item });

  const SmallCard = () => (
    <div className="flex w-full flex-col rounded-xl bg-white p-3 text-dark shadow-md">
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
      <AnimatedButton onClick={onClick}>add to cart</AnimatedButton>
    </div>
  );

  const LargeCard = () => (
    <div className="flex flex-col gap-1">
      <div className="hidden flex-col gap-1 sm:flex">
        <div
          className="flex flex-row items-start gap-4 rounded-2xl bg-white
            p-4 shadow-md"
        >
          {item.image ? (
            <Image
              src={item.image}
              className="w-44 rounded-lg"
              alt="daily-special"
            />
          ) : null}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <h4 className="text-xl font-semibold text-dark">{item.name}</h4>
              <span className="text-xl font-semibold text-dark">{`$${item.price}`}</span>
            </div>
            <p>{item.details}</p>
            <AnimatedButton onClick={onClick}>Add to cart</AnimatedButton>
          </div>
        </div>
      </div>
      <div className="flex sm:hidden">
        <SmallCard />
      </div>
    </div>
  );

  return <>{large ? <LargeCard /> : <SmallCard />}</>;
};

export default OrderItem;
