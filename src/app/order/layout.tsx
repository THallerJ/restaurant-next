import { OrderContextProvider } from "./contexts/order_context/OrderContext";

const OrderLayout = ({ children }: { children: React.ReactNode }) => {
  return <OrderContextProvider>{children}</OrderContextProvider>;
};

export default OrderLayout;
