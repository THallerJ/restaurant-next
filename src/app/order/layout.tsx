import { OrderContextProvider } from "./contexts/order_context/OrderContext";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <OrderContextProvider>
      <div className="">{children}</div>
    </OrderContextProvider>
  );
};

export default layout;
