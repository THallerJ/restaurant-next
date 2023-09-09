"use client";
import { ImportsNotUsedAsValues } from "typescript";
import { useOrder } from "../contexts/OrderContext";
import { InputList } from "@/components";

const Cart = () => {
  const { cartItems } = useOrder();

  const inputStyle =
    "rounded-2xl border-2 border-darkLight p-2  shadow-md active:border-dark";

  return (
    <div className="flex w-full items-center justify-center">
      <div
        className="page-scale flex h-full flex-col gap-4 rounded-2xl border-4 
        border-dark bg-white p-4"
      >
        <div>
          <h2 className="heading-sm pb-1">Your order</h2>
          <div className="flex flex-col gap-1">
            {cartItems.items.map((item) => (
              <div key={item.item.name}>
                <span>{item.item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="heading-sm pb-1">Your information</h2>
          <div className="flex flex-col gap-4">
            <input required placeholder="First Name" className={inputStyle} />
            <input required placeholder="First Name" className={inputStyle} />
            <input
              required
              placeholder="Email Address"
              type="email"
              className={inputStyle}
            />
            <input
              required
              placeholder="Phone Number"
              type="tele"
              className={inputStyle}
            />
            <button className="btn self-end">Finish order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
