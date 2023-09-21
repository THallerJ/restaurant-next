"use client";
import { useOrder } from "@/app/order/contexts/OrderContext";
import { cartItems, orderItem } from "@/app/order/types";
import { Close } from "@/assets";
import { ListDivider } from "@/components";
import { useNotify } from "@/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";

type CartContentProps = {
  closeCart: () => void;
};
const CartContent = ({ closeCart }: CartContentProps) => {
  const { cartItems, cartDispatch } = useOrder();
  const router = useRouter();
  const [notified, notify] = useNotify(30000);
  const [backupData, setBackupData] = useState<orderItem | cartItems>();

  const restore = () => {
    if (backupData) cartDispatch({ type: "restore", payload: backupData });
  };

  const onCheckout = () => {
    closeCart();
    router.push("cart");
  };

  const onDelete = (item: orderItem) => {
    setBackupData(item);
    cartDispatch({ type: "delete", payload: item.item });
  };

  const onRemove = (item: orderItem) => {
    setBackupData(item);
    notify();
    cartDispatch({ type: "remove", payload: item.item });
  };

  const onClear = () => {
    setBackupData(cartItems);
    notify();
    cartDispatch({ type: "clear" });
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
          onClick={() => onClear()}
        >
          Clear Cart
        </button>
      </div>
      {cartItems.count > 0 ? (
        <>
          <div className="flex h-full flex-col overflow-auto p-4">
            {cartItems.items.map((item, index) => (
              <div key={item.item.name} className="flex flex-col">
                <div className="flex items-center justify-between py-2 text-sm">
                  <p className="w-5/12">{item.item.name}</p>
                  <div className="flex items-center">
                    <button onClick={() => onDelete(item)}>-</button>
                    <span className="w-[3ch] text-center">{item.count}</span>
                    <button
                      onClick={() =>
                        cartDispatch({ type: "add", payload: item.item })
                      }
                    >
                      +
                    </button>
                  </div>
                  <span className="w-[3ch] text-end">{`$${item.item.price}`}</span>
                  <button onClick={() => onRemove(item)}>
                    <Close className="h-3 w-3" />
                  </button>
                </div>
                <ListDivider show={index !== cartItems.items.length - 1} />
              </div>
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
            !notified ? " -translate-y-96" : null
          }`}
      >
        <button className="px-4 text-sm text-dark">undo</button>
      </div>
    </div>
  );
};

export default CartContent;
