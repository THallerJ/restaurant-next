"use client";
import YourOrder from "./your_order/YourOrder";
import YourInformation from "./YourInformation";
import { useOrder } from "../../../contexts/order_context/OrderContext";
import { useState, useEffect } from "react";

const Submit = ({ children }: { children: React.ReactNode }) => {
  const { cartItems } = useOrder();
  const [submittedFlag, setSubmittedFlag] = useState(false);

  useEffect(() => {
    if (cartItems && cartItems.count === 0) setSubmittedFlag(true);
  }, [cartItems]);

  return (
    <div className="flex h-full w-full flex-1 items-center justify-center">
      {cartItems.count > 0 || submittedFlag ? (
        <OrderForm
          submittedFlag={submittedFlag}
          setSubmittedFlag={setSubmittedFlag}
        />
      ) : (
        children
      )}
    </div>
  );
};

export default Submit;

type OrderFormProps = {
  submittedFlag: boolean;
  setSubmittedFlag: React.Dispatch<React.SetStateAction<boolean>>;
};

const OrderForm = ({ submittedFlag, setSubmittedFlag }: OrderFormProps) => {
  const { cartDispatch } = useOrder();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedFlag(true);
  };

  useEffect(() => {
    cartDispatch({ type: "clear" });
  }, [submittedFlag, cartDispatch]);

  return !submittedFlag ? (
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
  ) : (
    <h1>hello</h1>
  );
};
