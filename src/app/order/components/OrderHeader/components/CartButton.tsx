import { useState } from "react";
import { Cart } from "@/assets";
import { useOrder } from "@/app/order/contexts/OrderContext";
import ClickAway from "@/wrappers/ClickAway";

const CartButton = () => {
  const { cartItems, cartDispatch } = useOrder();
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
          <div className="absolute right-0 top-full h-48 min-w-full space-y-3 rounded-lg bg-dark p-4 text-white">
            {cartItems.items.map((item) => (
              <div
                key={item.item.name}
                className="flex justify-between gap-12 text-sm"
              >
                <p className="w-48">{item.item.name}</p>
                <div className="flex">
                  <button
                    className="mr-4"
                    onClick={() =>
                      cartDispatch({ type: "addItem", payload: item.item })
                    }
                  >
                    -
                  </button>
                  <span>{item.count}</span>
                  <button
                    className="ml-4"
                    onClick={() =>
                      cartDispatch({ type: "addItem", payload: item.item })
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </ClickAway>
  );
};

export default CartButton;
