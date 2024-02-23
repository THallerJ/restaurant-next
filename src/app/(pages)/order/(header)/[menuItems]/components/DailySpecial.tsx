"use client";
import { useState } from "react";
import { dailySpecial } from "@/constants";
import { DailySpecialModal } from "@/components";
import OrderItem from "./OrderItem";

const DailySpecial = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="flex flex-col gap-1" id="daily-special">
      <h2 className="heading-sm">Today&apos;s Daily Special</h2>
      <OrderItem item={dailySpecial} large>
        <div className="flex justify-center">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="text-dark"
          >
            click to learn more!
          </button>
        </div>
      </OrderItem>
      <DailySpecialModal showDialog={open} setShowDialog={setOpen} />
    </section>
  );
};

export default DailySpecial;
