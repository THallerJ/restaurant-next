import React from "react";
import { AnimatedButton } from "@/components";

const DiscountCode = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <input
        maxLength={5}
        minLength={5}
        size={5}
        className="input w-full py-2 text-center sm:w-10/12 md:w-3/4 lg:w-3/5"
        placeholder="Discount Code"
      />
      <AnimatedButton className="mt-2 w-full sm:w-10/12 md:w-3/4 lg:w-3/5">
        Apply code
      </AnimatedButton>
    </div>
  );
};

export default DiscountCode;
