"use client";
import { ListDivider } from "@/components";
import { useOrder } from "../../contexts/OrderContext/OrderContext";
import DiscountCode from "./DiscountCode";

const YourOrder = () => {
  return (
    <div className="flex flex-col">
      <h2 className="heading-sm self-start pb-1">Your order</h2>
      <div className="flex flex-col gap-8 sm:flex-row">
        <OrderList />
        <DiscountCode />
      </div>
    </div>
  );
};

export default YourOrder;

const OrderList = () => {
  const { cartItems } = useOrder();

  return (
    <div className="flex w-full flex-col">
      {cartItems.items.map((item, index) => (
        <>
          <div key={item.item.name} className="flex justify-between p-1">
            <span className="w-1/2">{item.item.name}</span>
            <span className="w-[3ch]">{item.count}</span>
            <span>{`$${item.item.price}`}</span>
          </div>
          <ListDivider show={index !== cartItems.items.length - 1} />
        </>
      ))}
      <div className="self-end pt-4">
        <p className="text-lg font-semibold">{`Total: $${cartItems.total}`}</p>
      </div>
    </div>
  );
};
