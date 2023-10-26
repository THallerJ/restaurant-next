"use client";
import { useState } from "react";
import YourOrder from "./components/your_order/YourOrder";
import YourInformation from "./components/YourInformation";
import { useOrder } from "../../contexts/order_context/OrderContext";
import { Directions } from "@/components";
import { formatTime } from "@/utils";
import Link from "next/link";
import { Add } from "@/assets";

const SubmitPage = () => {
  const [submittedFlag, setSubmittedFlag] = useState(false);
  const [time, setTime] = useState<[number, number] | null>(null);

  return (
    <div className="flex h-full w-full flex-1 items-center justify-center">
      {!submittedFlag ? (
        <OrderForm
          setSubmittedFlag={setSubmittedFlag}
          time={time}
          setTime={setTime}
        />
      ) : (
        <div className="page-scale flex h-full items-center justify-center">
          <p className="rounded-lg bg-white p-4 shadow-md">
            Your order has been submitted! You can pick up your food at{" "}
            {time ? formatTime(...time) : null}! Click{" "}
            <Directions>here</Directions> for directions to the restaurant!
          </p>
        </div>
      )}
    </div>
  );
};

export default SubmitPage;

type OrderFormProps = {
  setSubmittedFlag: React.Dispatch<React.SetStateAction<boolean>>;
  time: [number, number] | null;
  setTime: React.Dispatch<React.SetStateAction<[number, number] | null>>;
};

const OrderForm = ({ setSubmittedFlag, time, setTime }: OrderFormProps) => {
  const { cartDispatch, cartItems } = useOrder();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedFlag(true);
    cartDispatch({ type: "clear" });
  };

  return cartItems.count > 0 ? (
    <form
      onSubmit={onSubmit}
      className="flex w-full flex-col gap-8
        rounded-lg border-4 border-dark bg-white p-4"
    >
      <YourOrder />
      <YourInformation time={time} setTime={setTime} />
      <button className="btn self-end" type="submit">
        Finish order
      </button>
    </form>
  ) : (
    <div
      className="flex h-full flex-col items-center 
        justify-center gap-4 text-center"
    >
      <p className="heading-sm">You don&apos;t have any items in your cart.</p>
      <Link
        href="/order/all"
        className=" flex items-center gap-2 rounded-lg border-2 
        border-dark/40 p-3 font-semibold text-dark"
      >
        <Add className="h-10 w-10" />
        Add items to cart
      </Link>
    </div>
  );
};
