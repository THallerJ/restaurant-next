import OrderHeader from "./components/order_header/OrderHeader";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center bg-offwhite pb-8 pt-2 xsm:min-h-[66%]">
      <OrderHeader />
      <div className="page-scale flex flex-1 flex-col py-8">{children}</div>
    </div>
  );
};

export default layout;
