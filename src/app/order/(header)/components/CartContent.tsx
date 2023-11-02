import { useOrderContext } from "@/app/order/contexts/order_context/OrderContext";
import { useRouter } from "next/navigation";
import CartItem from "./CartItem";
import { useState } from "react";
import UndoPrompt from "./UndoPrompt";
import { useCartContext } from "@/app/order/contexts/CartContext";

const CartContent = () => {
  const { cartItems, cartDispatch } = useOrderContext();
  const router = useRouter();
  const { notifyUndo, closeCart } = useCartContext();
  const [clearFlag, setClearFlag] = useState(false);

  const onCheckout = () => {
    closeCart();
    router.push("submit");
  };

  const onClear = () => {
    if (clearFlag) {
      notifyUndo();
      cartDispatch({ type: "clear" });
      setClearFlag(false);
    }
  };

  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden ${
        cartItems.count > 0 ? "justify-between" : "justify-start"
      }`}
    >
      <div className="mb-1 flex justify-between p-4 shadow-md">
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
            className={`flex h-full flex-col overflow-auto overscroll-contain 
              transition-opacity duration-300 ${
                clearFlag ? "opacity-0" : null
              }`}
            onTransitionEnd={onClear}
          >
            {cartItems.items.map((item, index) => (
              <CartItem key={item.item.name} item={item} index={index} />
            ))}
          </div>
          <div
            className="mt-1 flex items-end justify-between p-4 shadow-md"
            style={{ boxShadow: "0px 5px 10px black" }}
          >
            <button className="btn" aria-label="checkout" onClick={onCheckout}>
              Checkout
            </button>
            <p className="font-semibold text-dark">
              Total: ${cartItems.total.toFixed(2)}
            </p>
          </div>
        </>
      ) : (
        <div className="flex h-full items-center justify-center">
          <p>Your cart is empty</p>
        </div>
      )}
      <UndoPrompt />
    </div>
  );
};

export default CartContent;
