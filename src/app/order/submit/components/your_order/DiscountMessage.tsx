import { Close } from "@/assets";
import { useYourOrder } from "../../contexts/YourOrderContext";
import { Message } from "@/components";

//show red error when wrong disocunt applied and give hint towards codes, need to useNotify also flatten all folders all hooks contexts etc should be in root of thing
const DiscountMessage = () => {
  const { discountPercent } = useYourOrder();
  return discountPercent > 0 ? <DiscountInfo /> : <InvalidDiscount />;
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

const InvalidDiscount = () => {
  const { notifiedDiscount } = useYourOrder();

  return notifiedDiscount ? (
    <Message pos="top-full mt-2">Invalid Code</Message>
  ) : null;
};
