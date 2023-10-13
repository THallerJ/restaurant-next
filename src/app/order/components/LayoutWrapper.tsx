"use client";
import { OrderContextProvider } from "../contexts/order_context/OrderContext";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return <OrderContextProvider>{children}</OrderContextProvider>;
};

export default LayoutWrapper;
