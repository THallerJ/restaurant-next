import { useOrder } from "../../contexts/OrderContext/OrderContext";
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
              <span className="w-1/2">{item.item.name}</span>
              <span className="w-[3ch]">{item.count}</span>
              <span>{`$${item.item.price}`}</span>
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
      <div className="flex w-full flex-col items-center justify-center">
        <input
          maxLength={5}
          minLength={5}
          size={5}
          className="input w-full py-2 text-center sm:w-10/12 md:w-3/4 lg:w-3/5"
          placeholder="Discount Code"
        />
        <AnimatedButton className="mt-2 w-full sm:w-10/12 md:w-3/4 lg:w-3/5">
          Apply code
        </AnimatedButton>
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      <h2 className="heading-sm self-start pb-1">Your order</h2>
      <div className="flex flex-col gap-4 sm:flex-row">
        <OrderList />
        <DiscountCode />
      </div>
    </div>
  );
};

export default YourOrder;
