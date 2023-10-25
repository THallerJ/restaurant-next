"use client";
import { useState } from "react";
import YourOrder from "./components/your_order/YourOrder";
import YourInformation from "./components/YourInformation";
import { useOrder } from "../../contexts/order_context/OrderContext";

const SubmitPage = () => {
  const [submittedFlag, setSubmittedFlag] = useState(false);

  return (
    <div className="flex w-full flex-1 items-center justify-center">
      {!submittedFlag ? (
        <OrderForm setSubmittedFlag={setSubmittedFlag} />
      ) : (
        <SubmittedForm />
      )}
    </div>
  );
};

export default SubmitPage;

type OrderFormProps = {
  setSubmittedFlag: React.Dispatch<React.SetStateAction<boolean>>;
};

const OrderForm = ({ setSubmittedFlag }: OrderFormProps) => {
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
      <YourInformation />
      <button className="btn self-end" type="submit">
        Finish order
      </button>
    </form>
  ) : (
    <h1 className="heading-sm  h-96">You have nothing</h1>
  );
};

const SubmittedForm = () => <div className="h-96 bg-green-700">SUBMITTED</div>;
