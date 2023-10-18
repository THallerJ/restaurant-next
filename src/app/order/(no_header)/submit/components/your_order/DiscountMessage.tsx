import { Close } from "@/assets";
import { useYourOrder } from "../../contexts/YourOrderContext";
import { Message } from "@/components";

const DiscountMessage = () => {
  const { resetFlag, invalidFlag } = useYourOrder();

  return (
    <>
      <DiscountInfo />
      <Message full pos="top-full mt-4" condition={invalidFlag && !resetFlag}>
        Invalid Code! Hint: try 00000, 11111, 22222, or 33333.
      </Message>
    </>
  );
};

export default DiscountMessage;

const DiscountInfo = () => {
  const { discountPercent, discountCode, resetDiscount } = useYourOrder();

  return discountPercent > 0 ? (
    <div
      className="mt-4 flex w-full justify-between gap-2 rounded-lg border-2 
      border-green-400 bg-green-100 p-4 text-sm"
    >
      <p className="font-semibold">
        {discountPercent * 100}% discount applied with code{" "}
        <span className="rounded-lg bg-green-300 px-1">{discountCode}</span>!
      </p>
      <button onClick={resetDiscount} className="my-1 flex items-start">
        <Close className="h-3 w-3" />
      </button>
    </div>
  ) : null;
};
