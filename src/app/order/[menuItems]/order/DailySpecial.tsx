"use client";
import { useState } from "react";
import { dailySpecial } from "@/constants";
import { DailySpecialModal } from "@/components";
import OrderItem from "./OrderItem";

const DailySpecial = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <h2 className="heading-sm">Today&apos;s Daily Special</h2>
      <OrderItem item={dailySpecial} large>
        <button onClick={() => setOpen((prev) => !prev)} className="text-dark">
          click to learn more!
        </button>
        <DailySpecialModal showDialog={open} setShowDialog={setOpen} />
      </OrderItem>
    </div>
  );
};

export default DailySpecial;
