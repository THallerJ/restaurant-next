import React from "react";
import { useYourOrder } from "../../contexts/YourOrderContext";

const DiscountMessage = () => {
  const { discountCode, discountPercent } = useYourOrder();

  return discountCode ? (
    <div className="mt-4 w-full rounded-lg border-2 border-green-400 px-2 py-1 text-sm">
      {discountPercent * 100}% discount applied with code{" "}
      <span className="rounded-lg bg-green-300 px-1">{discountCode}</span>!
    </div>
  ) : null;
};

export default DiscountMessage;
