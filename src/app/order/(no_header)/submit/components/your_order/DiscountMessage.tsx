import { Close } from "@/assets";
import { useYourOrder } from "../../contexts/YourOrderContext";
import { Message } from "@/components";

const DiscountMessage = () => {
  const { discountPercent, notifiedDiscount, resetFlag } = useYourOrder();

  return discountPercent > 0 ? (
    <DiscountInfo />
  ) : (
    <Message
      full
      pos="top-full mt-2"
      condition={notifiedDiscount && !resetFlag}
    >
      Invalid Code! Hint: try 00000, 11111, 22222, or 33333.
    </Message>
  );
};

export default DiscountMessage;

const DiscountInfo = () => {
  const { discountPercent, discountCode, resetDiscount } = useYourOrder();

  return (
    <div
      className="mt-4 flex w-full justify-center rounded-lg border-2 
      border-green-400 px-2 py-1 text-sm"
    >
      <p>
        {discountPercent * 100}% discount applied with code{" "}
        <span className="rounded-lg bg-green-300 px-1">{discountCode}</span>!
      </p>
      <button onClick={resetDiscount} className="my-1 flex items-start">
        <Close className="h-3 w-3" />
      </button>
    </div>
  );
};
