import { InputLabel, AnimatedButton } from "@/components";
import { useState } from "react";
import { useYourOrder } from "../../contexts/YourOrderContext";
import DiscountMessage from "./DiscountMessage";

const DiscountCode = () => {
  const [currCode, setCurrCode] = useState("");
  const { updateDiscount } = useYourOrder();

  return (
    <div className="flex w-full items-start justify-center sm:w-1/3">
      <div className="relative flex w-full flex-col items-center">
        <InputLabel
          id="discount_code"
          className="input text-2xl tracking-widest"
          format="#####"
          mask="_"
          label="Discount Code"
          placeholder="_____"
          patternValue={currCode}
          onChange={(e) => setCurrCode(e.target.value)}
        />
        <AnimatedButton
          className="mt-2"
          fullSize
          onClick={() => updateDiscount(currCode)}
        >
          Apply code
        </AnimatedButton>
        <DiscountMessage currCode={currCode} setCurrCode={setCurrCode} />
      </div>
    </div>
  );
};

export default DiscountCode;
