import { useOrder } from "@/app/order/contexts/OrderContext";
import { Close } from "@/assets";

const CartContent = () => {
  const { cartItems, cartDispatch } = useOrder();

  return (
    <div className="flex h-full flex-col justify-between font-semibold">
      <div className="flex justify-between px-4 pt-4">
        <h2 className="heading-sm font-normal">Cart</h2>
        {cartItems.count > 0 ? (
          <button
            className="text-sm font-normal"
            onClick={() => cartDispatch({ type: "clear" })}
          >
            Clear Cart
          </button>
        ) : null}
      </div>
      <div className="flex h-full flex-col gap-3 overflow-auto p-4">
        {cartItems.items.map((item) => (
          <div
            key={item.item.name}
            className="flex items-center justify-between text-sm"
          >
            <p className="w-[45%]">{item.item.name}</p>
            <div className="flex items-center">
              <button
                onClick={() =>
                  cartDispatch({ type: "delete", payload: item.item })
                }
              >
                -
              </button>
              <span className="w-[3ch] text-center">{item.count}</span>
              <button
                onClick={() =>
                  cartDispatch({ type: "add", payload: item.item })
                }
              >
                +
              </button>
            </div>
            <span className="w-[3ch] text-end">{`$${item.item.price}`}</span>
            <button
              onClick={() =>
                cartDispatch({ type: "remove", payload: item.item })
              }
            >
              <Close className="h-6 w-6 stroke-dark" />
            </button>
          </div>
        ))}
      </div>
      <div className="flex items-end justify-between px-4 py-2">
        <button className="btn" aria-label="checkout">
          Checkout
        </button>
        <p className="">{`Total: $${cartItems.total}`}</p>
      </div>
    </div>
  );
};

export default CartContent;
