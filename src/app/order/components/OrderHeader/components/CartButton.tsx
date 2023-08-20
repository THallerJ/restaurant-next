import React from "react";
import { Cart } from "@/assets";
import { useOrder } from "@/app/order/contexts/OrderContext";

const CartButton = () => {
  const { cartItems } = useOrder();

  return (
    <button className="relative">
      <Cart className="h-8 w-8" />
      {cartItems.total > 0 ? (
        <div className="absolute left-5 top-5 flex h-6 w-6 items-center justify-center rounded-full bg-dark">
          <span className="text-sm font-semibold text-offwhite">
            {cartItems.total}
          </span>
        </div>
      ) : null}
    </button>
  );
};

export default CartButton;
