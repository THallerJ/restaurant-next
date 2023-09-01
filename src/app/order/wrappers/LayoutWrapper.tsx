"use client";
import { OrderContextProvider } from "../contexts/OrderContext";
import OrderHeader from "../components/bababal/OrderHeader";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <OrderContextProvider>
      <OrderHeader />
      {children}
    </OrderContextProvider>
  );
};

export default LayoutWrapper;
