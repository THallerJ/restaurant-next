import { useOrder } from "@/app/order/contexts/OrderContext";
import { useNotify } from "@/hooks";
import { useRouter } from "next/navigation";
import CartItem from "./CartItem";
import { useState } from "react";

type CartContentProps = {
  closeCart: () => void;
};

const CartContent = ({ closeCart }: CartContentProps) => {
  const { cartItems, cartDispatch } = useOrder();
  const router = useRouter();
  const [showUndo, notify] = useNotify(100000);
  const [clearFlag, setClearFlag] = useState(false);

  const onCheckout = () => {
    closeCart();
    router.push("cart");
  };

  const onClear = () => {
    if (clearFlag) {
      notify();
      cartDispatch({ type: "clear" });
      setClearFlag(false);
    }
  };

  return (
    <div
      className={` relative flex h-full flex-col overflow-hidden ${
        cartItems.count > 0 ? "justify-between" : "justify-start"
      }`}
    >
      <div className="flex justify-between px-4 pt-4">
        <h2 className="heading-sm font-normal">Cart</h2>
        <button
          className={`text-sm font-normal lowercase text-dark ${
            cartItems.count > 0 ? "block" : "hidden"
          }`}
          onClick={() => {
            setClearFlag(true);
          }}
        >
          Clear Cart
        </button>
      </div>
      {cartItems.count > 0 ? (
        <>
          <div
            className={`flex h-full flex-col overflow-auto p-4 transition-opacity duration-300 ${
              clearFlag ? "opacity-0" : null
            }`}
            onTransitionEnd={() => {
              console.log("clear thing");
              onClear();
            }}
          >
            {cartItems.items.map((item, index) => (
              <CartItem
                key={item.item.name}
                item={item}
                index={index}
                notify={notify}
              />
            ))}
          </div>
          <div className="flex items-end justify-between px-4 py-2">
            <button
              className="btn"
              aria-label="checkout"
              onClick={() => onCheckout()}
            >
              Checkout
            </button>
            <p className="font-semibold text-dark">{`Total: $${cartItems.total}`}</p>
          </div>
        </>
      ) : (
        <div className="flex h-full items-center justify-center">
          <p>Your cart is empty</p>
        </div>
      )}
      <div
        className={`absolute inset-x-0 top-2 m-auto w-11/12 rounded-lg bg-offwhite 
          p-2 shadow-md transition-transform duration-300 ${
            !showUndo ? " -translate-y-96" : null
          }`}
      >
        <button
          className="px-4 text-sm text-dark"
          onClick={() => cartDispatch({ type: "restore" })}
        >
          undo
        </button>
      </div>
    </div>
  );
};

export default CartContent;
