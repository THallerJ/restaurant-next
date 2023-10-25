"use client";
import YourOrder from "./components/your_order/YourOrder";
import YourInformation from "./components/YourInformation";
import { useOrder } from "../../contexts/order_context/OrderContext";
import { useState, useEffect } from "react";

const SubmitPage = () => {
  const [submittedFlag, setSubmittedFlag] = useState(false);

  return (
    <div className="flex h-full w-full flex-1 items-center justify-center">
      {!submittedFlag ? (
        <OrderForm
          submittedFlag={submittedFlag}
          setSubmittedFlag={setSubmittedFlag}
        />
      ) : (
        <SubmittedForm />
      )}
    </div>
  );
};

export default SubmitPage;

type OrderFormProps = {
  submittedFlag: boolean;
  setSubmittedFlag: React.Dispatch<React.SetStateAction<boolean>>;
};

const OrderForm = ({ submittedFlag, setSubmittedFlag }: OrderFormProps) => {
  const { cartDispatch, cartItems } = useOrder();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedFlag(true);
  };

  useEffect(() => {
    if (submittedFlag) cartDispatch({ type: "clear" });
  }, [submittedFlag, cartDispatch]);

  return cartItems.count > 0 ? (
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
    <h1>You have no items in your cart</h1>
  );
};

const SubmittedForm = () => <h1>SUBMITTED</h1>;
