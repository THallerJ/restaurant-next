import { useOrder } from "../../contexts/OrderContext";
import { AnimatedButton } from "@/components";
import { ListDivider } from "@/components";

const YourOrder = () => {
  const { cartItems } = useOrder();

  const OrderList = () => {
    return (
      <div className="flex w-full flex-col">
        {cartItems.items.map((item, index) => (
          <>
            <div key={item.item.name} className="flex justify-between p-1">
              <span className="w-[50%]">{item.item.name}</span>
              <span className="w-[3ch]">{item.count}</span>
              <span className=" ">{`$${item.item.price}`}</span>
            </div>
            <ListDivider show={index !== cartItems.items.length - 1} />
          </>
        ))}
        <div className="self-end pt-4">
          <p className="text-lg font-semibold">{`Total: $${cartItems.total}`}</p>
        </div>
      </div>
    );
  };

  const DiscountCode = () => {
    return (
      <div className="flex w-full flex-col items-center justify-center py-4 sm:py-0">
        <input
          className="input w-full sm:w-[85%] md:w-[75%] lg:w-[60%]"
          placeholder="Discount Code"
        />
        <AnimatedButton className=" w-full sm:w-[85%] md:w-[75%] lg:w-[60%]">
          Apply code
        </AnimatedButton>
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      <h2 className="heading-sm self-start pb-1">Your order</h2>
      <div className="flex flex-col gap-0 sm:flex-row sm:gap-4">
        <OrderList />
        <DiscountCode />
      </div>
    </div>
  );
};

export default YourOrder;
