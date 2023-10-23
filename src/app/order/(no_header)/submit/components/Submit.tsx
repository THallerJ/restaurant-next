"use client";
import YourOrder from "./your_order/YourOrder";
import YourInformation from "./YourInformation";
import { useOrder } from "../../../contexts/order_context/OrderContext";
import { useState } from "react";

const Submit = ({ children }: { children: React.ReactNode }) => {
  const { cartItems } = useOrder();

  return (
    <div className="flex h-full w-full flex-1 items-center justify-center">
      {cartItems.count > 0 ? <OrderForm /> : children}
    </div>
  );
};

export default Submit;

const OrderForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { cartDispatch } = useOrder();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    cartDispatch({ type: "clear" });
  };

  return !submitted ? (
    <form
      onSubmit={onSubmit}
      className="flex w-full flex-col gap-8
      rounded-lg border-4 border-dark bg-white p-4"
    >
      <YourOrder />
      <YourInformation />
      <button className="btn self-end" type="submit">
        Finish order
      </button>
    </form>
  ) : null;
};
