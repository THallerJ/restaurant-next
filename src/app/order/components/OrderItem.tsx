"use client";
import { menuItem } from "@/types";
import Image from "next/image";
import { useOrder } from "../contexts/OrderContext";
import { Checkmark } from "@/assets";
import { useState } from "react";

const OrderItem = ({ item }: { item: menuItem }) => {
  const { cartDispatch } = useOrder();
  const [clicked, setClicked] = useState(false);

  const onClick = () => {
    if (!clicked) {
      setClicked(true);
      cartDispatch({ type: "add", payload: item });
    }
  };

  return (
    <div className="flex w-full flex-col justify-between gap-3 rounded-xl bg-white p-3 text-dark shadow-md xs:w-48 md:w-72">
      {item.image ? (
        <Image src={item.image} alt={item.name} className="rounded-lg" />
      ) : null}
      <div className="flex h-full flex-col justify-between">
        <div className="flex gap-8">
          <div>
            <span className="font-semibold">{item.name}</span>
            <p className="text-xs">{item.details}</p>
          </div>
          <span className="font-semibold">{`$${item.price}`}</span>
        </div>
        <button
          className={`mt-3 rounded border px-[1em] py-[0.5em] font-bold text-white shadow-md 
            transition-all duration-700 hover:border-dark ${
              clicked ? "bg-primaryLight" : "bg-primary"
            }`}
          onClick={onClick}
          onTransitionEnd={() => setClicked(false)}
        >
          {clicked ? (
            <div className=" flex justify-center">
              <Checkmark className="h-6 w-6 fill-white stroke-white" />
            </div>
          ) : (
            <span>Add to cart</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default OrderItem;
