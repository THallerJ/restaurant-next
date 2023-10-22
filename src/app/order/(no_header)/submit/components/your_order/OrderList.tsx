import { useOrder } from "@/app/order/contexts/order_context/OrderContext";
import { useYourOrder } from "../../contexts/YourOrderContext";
import { ListDivider } from "@/components";
import { useRouter } from "next/navigation";
import { Add } from "@/assets";

const OrderList = () => {
  return (
    <div className="flex w-full flex-col">
      <ItemHeader />
      <Items />
      <AddItems />
      <Total />
    </div>
  );
};

export default OrderList;

const ItemHeader = () => (
  <div className="flex w-full justify-between text-dark xs:px-3">
    <span className="w-6/12">Item</span>
    <span className="text-center">#</span>
    <span className="w-[5ch]">$</span>
  </div>
);

const Items = () => {
  const { cartItems } = useOrder();
  const { discountItems } = useYourOrder();

  return (
    <div className="rounded-t-lg border-dark/10 xs:border-2 xs:shadow-sm">
      {cartItems.items.map((item, index) => (
        <>
          <div
            key={item.item.name}
            className="flex items-center justify-between py-3 xs:px-3"
          >
            <span className="w-6/12">{item.item.name}</span>
            <span className="text-center">{item.count}</span>
            <div className="flex w-[5ch] flex-col text-start">
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

const AddItems = () => {
  const router = useRouter();

  return (
    <button
      className="flex items-center justify-center gap-2 rounded-b-lg 
        border-2 border-dark/10 p-2 xs:border-t-0 xs:shadow-sm"
      type="button"
      onClick={() => router.push("/order/all")}
    >
      <Add className="h-10 w-10" />
      <span className="font-semibold">Add items to cart</span>
    </button>
  );
};
