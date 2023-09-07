"use client";
import { useOrder } from "../contexts/OrderContext";

const Cart = () => {
  const { cartItems } = useOrder();
  return (
    <div className="flex w-full items-center justify-center">
      <div className="page-scale h-full rounded-2xl border-4 border-dark bg-white md:w-[50%]">
        <div className="m-2 bg-cyan-400">
          {cartItems.items.map((item) => (
            <p key={item.item.details}>{item.item.name}</p>
          ))}
        </div>
        <div className="m-2 bg-red-400">contact info</div>
      </div>
    </div>
  );
};

export default Cart;
