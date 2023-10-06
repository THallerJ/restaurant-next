"use client";
import YourOrder from "./your_order/YourOrder";
import YourInformation from "./YourInformation";
import { useOrder } from "../../contexts/order_context/OrderContext";

const Submit = ({ children }: { children: React.ReactNode }) => {
  const { cartItems } = useOrder();

  return (
    <div className="flex h-full w-full flex-1 items-center justify-center">
      {cartItems.count > 0 ? <OrderForm /> : children}
    </div>
  );
};

export default Submit;

const OrderForm = () => (
  <form
    onSubmit={(e) => e.preventDefault()}
    className="flex w-full flex-col gap-16
      rounded-lg border-4 border-dark bg-white p-4"
  >
    <YourOrder />
    <YourInformation />
    <button className="btn self-end" type="submit">
      Finish order
    </button>
  </form>
);
