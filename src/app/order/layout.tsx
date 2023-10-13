import { OrderContextProvider } from "./contexts/order_context/OrderContext";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <OrderContextProvider>{children}</OrderContextProvider>;
};

export default layout;
