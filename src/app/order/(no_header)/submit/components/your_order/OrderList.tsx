import { useOrder } from "@/app/order/contexts/order_context/OrderContext";
import { useYourOrder } from "../../contexts/YourOrderContext";
import { cartItems } from "@/app/order/types";
import { ListDivider } from "@/components";
import { useRouter } from "next/navigation";
import { Add } from "@/assets";

const OrderList = () => {
  const { cartItems } = useOrder();
  const { discountItems } = useYourOrder();
  const router = useRouter();

  return (
    <div className="flex w-full flex-col">
      <Items items={discountItems ? discountItems : cartItems} />
      <button
        className="flex items-center justify-center gap-2 rounded-b-lg 
          border-x-2 border-b-2 border-dark/25 p-3 shadow-sm"
        type="button"
        onClick={() => router.push("/order/all")}
      >
        <Add className="mb-1 h-10 w-10" />
        <span className="font-semibold">Add items to cart</span>
      </button>
      <Total />
    </div>
  );
};

export default OrderList;

const Items = ({ items }: { items: cartItems }) => {
  return (
    <div className="rounded-t-lg border-2 border-dark/25 p-2 shadow-sm">
      {items.items.map((item, index) => (
        <>
          <div key={item.item.name} className="flex justify-between p-2">
            <span className="w-1/2">{item.item.name}</span>
            <span className="w-[3ch]">{item.count}</span>
            <span>{`$${item.item.price.toFixed(2)}`}</span>
          </div>
          <ListDivider show={index !== items.items.length - 1} />
        </>
      ))}
    </div>
  );
};

const Total = () => {
  const { cartItems } = useOrder();
  const { discountItems } = useYourOrder();

  return (
    <div className="self-end pt-4">
      <p className="text-lg font-semibold">
        Total: {discountItems ? <s>${cartItems.total.toFixed(2)}</s> : null} $
        {discountItems
          ? discountItems.total.toFixed(2)
          : cartItems.total.toFixed(2)}
      </p>
    </div>
  );
};
