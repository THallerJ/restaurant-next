"use client";
import { ListDivider } from "@/components";
import { useOrder } from "../../../contexts/order_context/OrderContext";
import DiscountCode from "./DiscountCode";
import { cartItems } from "../../../types";
import {
  YourOrderContextProvider,
  useYourOrder,
} from "../../contexts/YourOrderContext";

const YourOrder = () => {
  return (
    <div className="flex flex-col">
      <h2 className="heading-sm self-start pb-1">Your order</h2>
      <div className="flex flex-col gap-8 sm:flex-row">
        <YourOrderContextProvider>
          <OrderList />
          <DiscountCode />
        </YourOrderContextProvider>
      </div>
    </div>
  );
};

export default YourOrder;

const OrderList = () => {
  const { cartItems } = useOrder();
  const { discountItems } = useYourOrder();

  return (
    <div className="flex w-full flex-col">
      <Items items={discountItems ? discountItems : cartItems} />
      <div className="self-end pt-4">
        <p className="text-lg font-semibold">{`Total: $${cartItems.total}`}</p>
      </div>
    </div>
  );
};

const Items = ({ items }: { items: cartItems }) => {
  return items.items.map((item, index) => (
    <>
      <div key={item.item.name} className="flex justify-between p-1">
        <span className="w-1/2">{item.item.name}</span>
        <span className="w-[3ch]">{item.count}</span>
        <span>{`$${item.item.price}`}</span>
      </div>
      <ListDivider show={index !== items.items.length - 1} />
    </>
  ));
};
