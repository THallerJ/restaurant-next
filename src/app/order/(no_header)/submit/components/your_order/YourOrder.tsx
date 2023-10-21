"use client";
import OrderList from "./OrderList";
import DiscountCode from "./DiscountCode";
import { YourOrderContextProvider } from "../../contexts/YourOrderContext";

const YourOrder = () => {
  return (
    <div className="flex flex-col">
      <h2 className="heading-sm self-start pb-1">Your order</h2>
      <div className="flex flex-col gap-4 md:flex-row">
        <YourOrderContextProvider>
          <OrderList />
          <DiscountCode />
        </YourOrderContextProvider>
      </div>
    </div>
  );
};

export default YourOrder;
