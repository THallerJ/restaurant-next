"use client";
import { dailySpecial } from "@/constants";
import Image from "next/image";
import { useOrder } from "../contexts/OrderContext";

const DailySpecial = () => {
  const { cartDispatch } = useOrder();

  return (
    <>
      <div className="flex flex-col gap-1">
        <h2 className="heading-sm">Today&apos;s Daily Special</h2>
        <div
          className="flex flex-col items-center gap-4 rounded-2xl border-2 border-dark p-4
        sm:flex-row sm:items-start"
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
            <button
              className="btn mt-4 w-48 self-end"
              onClick={() =>
                cartDispatch({ type: "add", payload: dailySpecial })
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DailySpecial;
