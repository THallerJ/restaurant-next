import OrderHeader from "./components/OrderHeader";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-[70%] flex-col items-center bg-offwhite pb-8 pt-2">
      <OrderHeader />
      <div className="page-scale flex pt-8">{children}</div>
    </div>
  );
};

export default layout;
