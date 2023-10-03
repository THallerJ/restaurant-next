import { InputLabel, AnimatedButton } from "@/components";
import { cartItems } from "../../types";

type DiscountCodeProps = {
  setDiscountItems: React.Dispatch<React.SetStateAction<cartItems | null>>;
};

const DiscountCode = ({ setDiscountItems }: DiscountCodeProps) => {
  return (
    <div className="flex w-full justify-center sm:px-4">
      <div className="flex w-full flex-col items-center sm:w-5/6 lg:w-2/3">
        <InputLabel
          id="discount_code"
          className="input text-2xl tracking-widest"
          format="#####"
          mask="_"
          label="Discount Code"
          placeholder="_____"
        />
        <AnimatedButton className="mt-2" fullSize>
          Apply code
        </AnimatedButton>
      </div>
    </div>
  );
};

export default DiscountCode;
