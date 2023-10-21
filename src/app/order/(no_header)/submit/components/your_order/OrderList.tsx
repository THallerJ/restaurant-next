import { useOrder } from "@/app/order/contexts/order_context/OrderContext";
import { useYourOrder } from "../../contexts/YourOrderContext";
import { ListDivider } from "@/components";
import { useRouter } from "next/navigation";
import { Add } from "@/assets";

const OrderList = () => {
  const router = useRouter();

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full px-3">
        <span className="w-8/12 bg-orange-100">Item</span>
        <span className="w-2/12 bg-violet-100 text-center">#</span>
        <span className="w-2/12 bg-gray-100 text-start">$</span>
      </div>
      <Items />
      <button
        className="flex items-center justify-center gap-2 rounded-b-lg 
          border-x-2 border-b-2 border-dark/25 p-3 shadow-sm"
        type="button"
        onClick={() => router.push("/order/all")}
      >
        <Add className="h-10 w-10" />
        <span className="font-semibold">Add items to cart</span>
      </button>
      <Total />
    </div>
  );
};

export default OrderList;

const Items = () => {
  const { cartItems } = useOrder();
  const { discountItems } = useYourOrder();

  return (
    <div className="rounded-t-lg border-2 border-dark/25 shadow-sm">
      {cartItems.items.map((item, index) => (
        <>
          <div
            key={item.item.name}
            className="flex items-center justify-between p-3"
          >
            <span className="w-8/12 bg-cyan-100">{item.item.name}</span>
            <span className="w-2/12 bg-green-100 text-center">
              {item.count}
            </span>
            <div className="flex w-2/12 flex-col bg-red-100 text-end ">
              <span>
                {discountItems ? (
                  <s>{`$${item.item.price.toFixed(2)}`}</s>
                ) : null}
              </span>
              <span>{`$${
                discountItems
                  ? discountItems.items[index].item.price.toFixed(2)
                  : item.item.price.toFixed(2)
              }`}</span>
            </div>
          </div>
          <ListDivider show={index !== cartItems.items.length - 1} />
        </>
      ))}
    </div>
  );
};

const Total = () => {
  const { cartItems } = useOrder();
  const { discountItems } = useYourOrder();

  return (
    <div className="self-end pt-2">
      <p className="text-lg font-semibold">
        Total: {discountItems ? <s>${cartItems.total.toFixed(2)}</s> : null} $
        {discountItems
          ? discountItems?.total.toFixed(2)
          : cartItems.total.toFixed(2)}
      </p>
    </div>
  );
};
