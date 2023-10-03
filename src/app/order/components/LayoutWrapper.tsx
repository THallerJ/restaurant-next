"use client";
import { OrderContextProvider } from "../contexts/order_context/OrderContext";
import OrderHeader from "./order_header/OrderHeader";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <OrderContextProvider>
      <OrderHeader />
      {children}
    </OrderContextProvider>
  );
};

export default LayoutWrapper;
