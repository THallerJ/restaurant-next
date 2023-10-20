import { Close } from "@/assets";
import { useYourOrder } from "../../contexts/YourOrderContext";
import { Message } from "@/components";

type DiscountMessageProps = {
  currCode: string;
  setCurrCode: React.Dispatch<React.SetStateAction<string>>;
};

const DiscountMessage = ({ setCurrCode, currCode }: DiscountMessageProps) => {
  const { resetFlag, invalidFlag, discountPercent } = useYourOrder();

  return (
    <>
      {discountPercent > 0 && !invalidFlag ? (
        <DiscountInfo setCurrCode={setCurrCode} />
      ) : (
        <Message
          full
          pos="top-full mt-4 z-50"
          condition={invalidFlag && (currCode === "" || !resetFlag)}
        >
          Invalid Code! Hint: try 00000, 11111, 22222, or 33333.
        </Message>
      )}
    </>
  );
};

export default DiscountMessage;

type DiscountInfoProps = {
  setCurrCode: React.Dispatch<React.SetStateAction<string>>;
};

const DiscountInfo = ({ setCurrCode }: DiscountInfoProps) => {
  const { discountPercent, discountCode, resetDiscount } = useYourOrder();

  return (
    <div
      className="mt-4 flex w-full justify-between gap-2 rounded-lg border-2 
      border-green-400 bg-green-100 p-2 text-sm"
    >
      <p className="font-semibold">
        {discountPercent * 100}% discount applied with code{" "}
        <span className="rounded-lg bg-green-300 px-1">{discountCode}</span>!
      </p>
      <button
        onClick={() => {
          resetDiscount();
          setCurrCode("");
        }}
        className="my-1 flex items-start"
      >
        <Close className="h-3 w-3" />
      </button>
    </div>
  );
};
