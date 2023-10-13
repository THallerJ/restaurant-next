import OrderHeader from "../components/order_header/OrderHeader";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <OrderHeader />
      {children}
    </div>
  );
};

export default layout;
