import { useState } from "react";
import { Cart } from "@/assets";
import { useOrder } from "@/app/order/contexts/OrderContext";
import ClickAway from "@/wrappers/ClickAway";

const CartButton = () => {
  const { cartItems } = useOrder();
  const [open, setOpen] = useState(false);

  return (
    <ClickAway callback={() => setOpen(false)}>
      <div className="relative">
        <button onClick={() => setOpen((prev) => !prev)}>
          <Cart className="h-8 w-8" />
          {cartItems.total > 0 ? (
            <div className="absolute bottom-2 left-4 flex h-5 w-5 items-center justify-center rounded-full bg-dark">
              <span className="text-sm font-semibold text-offwhite">
                {cartItems.total}
              </span>
            </div>
          ) : null}
        </button>
        {open ? (
          <div className="absolute right-0 top-full h-48 min-w-full rounded-lg bg-dark p-4 text-white">
            <span>sdsada as a</span>
          </div>
        ) : null}
      </div>
    </ClickAway>
  );
};

export default CartButton;
