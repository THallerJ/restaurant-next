import { useOrder } from "@/app/order/contexts/OrderContext";
import { useNotify } from "@/hooks";
import { useRouter } from "next/navigation";
import CartItem from "./CartItem";
import { useState } from "react";
import { Undo } from "@/assets";

type CartContentProps = {
  closeCart: () => void;
};

const CartContent = ({ closeCart }: CartContentProps) => {
  const { cartItems, cartDispatch } = useOrder();
  const router = useRouter();
  const [showUndo, notify, setUndo] = useNotify(3000);
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

  const onUndo = () => {
    setUndo(false);
    cartDispatch({ type: "restore" });
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
          onClick={() => setClearFlag(true)}
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
            onTransitionEnd={() => onClear()}
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
        className={`absolute  bottom-1/3 left-0 rounded-r-lg border-y-2 border-r-2 border-dark/50
           bg-third p-1 shadow-xl transition-transform duration-500 ${
             !showUndo ? " -translate-x-96" : null
           }`}
      >
        <button className="px-4 text-sm text-dark" onClick={() => onUndo()}>
          <Undo className="h-8 w-8" />
          <span className=" text-dark">undo</span>
        </button>
      </div>
    </div>
  );
};

export default CartContent;
