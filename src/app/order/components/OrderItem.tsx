"use client";
import { menuItem } from "@/types";
import Image from "next/image";
import { useOrder } from "../contexts/OrderContext";
import { Checkmark } from "@/assets";
import { useState } from "react";

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
      <button
        className={`mt-3 rounded border px-[1em] py-[0.5em] font-bold text-white shadow-md 
          transition-colors duration-700 hover:border-dark ${
            clicked ? "bg-primaryLight" : "bg-primary"
          }`}
        onClick={onClick}
        onTransitionEnd={() => setClicked(false)}
      >
        {clicked ? (
          <div className="flex justify-center">
            <Checkmark className="h-6 w-6 fill-white stroke-white" />
          </div>
        ) : (
          <span>add to cart</span>
        )}
      </button>
    </div>
  );
};

export default OrderItem;
