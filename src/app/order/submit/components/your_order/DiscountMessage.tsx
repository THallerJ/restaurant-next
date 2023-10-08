import { Close } from "@/assets";
import { useYourOrder } from "../../contexts/YourOrderContext";

//show red error when wrong disocunt applied and give hint towards codes, need to useNotify also flatten all folders all hooks contexts etc should be in root of thing
const DiscountMessage = () => {
  const { discountCode } = useYourOrder();
  return discountCode ? <Message /> : null;
};

export default DiscountMessage;

const Message = () => {
  const { discountPercent, discountCode, resetDiscount, notifiedDiscount } =
    useYourOrder();

  return discountPercent === 0 && notifiedDiscount ? (
    <p className="message absolute top-full mt-2">Invalid code</p>
  ) : (
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
