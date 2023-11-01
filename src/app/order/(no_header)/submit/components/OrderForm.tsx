import { useOrder } from "@/app/order/contexts/order_context/OrderContext";
import YourOrder from "./your_order/YourOrder";
import YourInformation from "./YourInformation";
import Link from "next/link";
import { Add } from "@/assets";

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
        className="bordered flex items-center gap-2 p-3 font-semibold text-dark"
      >
        <Add className="h-10 w-10" />
        Add items to cart
      </Link>
    </div>
  );
};

export default OrderForm;
