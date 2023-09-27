"use client";
import { useOrder } from "../../contexts/OrderContext/OrderContext";
import YourInformation from "../components/YourInformation";

type SubmitWrapperProps = {
  order: React.ReactNode;
  empty: React.ReactNode;
};

const SubmitWrapper = ({ order, empty }: SubmitWrapperProps) => {
  const { cartItems } = useOrder();

  const OrderForm = ({ children }: { children?: React.ReactNode }) => (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex w-full flex-col gap-4
        rounded-lg border-4 border-dark bg-white p-4"
    >
      {order}
      <YourInformation />
      <button className="btn self-end" type="submit">
        Finish order
      </button>
    </form>
  );

  return cartItems.count > 0 ? <OrderForm /> : empty;
};

export default SubmitWrapper;
