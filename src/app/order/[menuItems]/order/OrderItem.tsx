"use client";
import { menuItem } from "@/types";
import Image from "next/image";
import { useOrder } from "../../contexts/OrderContext";
import { useState } from "react";
import { AnimatedButton } from "@/components";
import { DownArrow } from "@/assets";

type OrderItemProps = {
  item: menuItem;
  children?: React.ReactNode;
};

const OrderItem = ({ item, children }: OrderItemProps) => {
  const { cartDispatch } = useOrder();
  const [clicked, setClicked] = useState(false);

  const onClick = () => {
    if (!clicked) {
      setClicked(true);
      cartDispatch({ type: "add", payload: item });
    }
  };

  return (
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
};

export default OrderItem;
