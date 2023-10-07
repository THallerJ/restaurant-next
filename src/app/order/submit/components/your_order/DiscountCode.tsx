import { InputLabel, AnimatedButton } from "@/components";
import { useState } from "react";
import { useYourOrder } from "../../contexts/YourOrderContext";
import DiscountMessage from "./DiscountMessage";

const DiscountCode = () => {
  const [currCode, setCurrCode] = useState("");
  const { updateDiscount } = useYourOrder();

  return (
    <div className="flex w-full items-start justify-center sm:px-4">
      <div className="flex w-full flex-col items-center sm:w-5/6 lg:w-2/3">
        <InputLabel
          id="discount_code"
          className="input text-2xl tracking-widest"
          format="#####"
          mask="_"
          label="Discount Code"
          placeholder="_____"
          onChange={(e) => setCurrCode(e.target.value)}
        />
        <AnimatedButton
          className="mt-2"
          fullSize
          onClick={() => updateDiscount(currCode)}
        >
          Apply code
        </AnimatedButton>
        <DiscountMessage />
      </div>
    </div>
  );
};

export default DiscountCode;
