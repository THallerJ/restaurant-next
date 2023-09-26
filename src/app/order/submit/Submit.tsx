"use client";
import YourOrder from "./components/YourOrder";
import YourInformation from "./components/YourInformation";
import { useOrder } from "../contexts/OrderContext/OrderContext";

const Submit = () => {
  const { cartItems } = useOrder();

  const OrderForm = () => (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex w-full flex-col gap-4
        rounded-lg border-4 border-dark bg-white p-4"
    >
      <YourOrder />
      <YourInformation />
      <button className="btn self-end" type="submit">
        Finish order
      </button>
    </form>
  );

  const EmptyOrder = () => (
    <h2 className="heading-sm">You have nothing in your cart</h2>
  );

  return (
    <div className="flex w-full items-center justify-center">
      {cartItems.count > 0 ? <OrderForm /> : <EmptyOrder />}
    </div>
  );
};

export default Submit;
