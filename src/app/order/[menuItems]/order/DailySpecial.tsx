"use client";
import { useState } from "react";
import { dailySpecial } from "@/constants";
import Image from "next/image";
import { useOrder } from "../../contexts/OrderContext";
import { AnimatedButton, DailySpecialModal } from "@/components";
import OrderItem from "./OrderItem";

const DailySpecial = () => {
  const { cartDispatch } = useOrder();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <h2 className="heading-sm">Today&apos;s Daily Special</h2>
      <div className="hidden flex-col gap-1 sm:flex">
        <div
          className="flex flex-row items-start gap-4 rounded-2xl bg-white
            p-4 shadow-md"
        >
          {dailySpecial.image ? (
            <Image
              src={dailySpecial.image}
              className="w-44 rounded-lg"
              alt="daily-special"
            />
          ) : null}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <h4 className="text-xl font-semibold text-dark">
                {dailySpecial.name}
              </h4>
              <span className="text-xl font-semibold text-dark">{`$${dailySpecial.price}`}</span>
            </div>
            <p>{dailySpecial.details}</p>
            <AnimatedButton
              onClick={() =>
                cartDispatch({ type: "add", payload: dailySpecial })
              }
            >
              Add to cart
            </AnimatedButton>
          </div>
        </div>
      </div>
      <div className="flex sm:hidden">
        <OrderItem item={dailySpecial}>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="text-dark"
          >
            click to learn more!
          </button>
        </OrderItem>
        <DailySpecialModal showDialog={open} setShowDialog={setOpen} />
      </div>
    </div>
  );
};

export default DailySpecial;
