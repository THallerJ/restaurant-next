import { useOrder } from "@/app/order/contexts/OrderContext";

const CartContent = () => {
  const { cartItems, cartDispatch } = useOrder();

  return (
    <div className="flex h-full flex-col justify-between font-semibold">
      <h2 className="heading-sm px-4 pt-4 font-normal">Cart</h2>
      <div className="flex h-full flex-col gap-3 overflow-auto p-4">
        {cartItems.items.map((item) => (
          <div key={item.item.name} className="flex justify-between text-sm">
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
              <button
                className="mx-4"
                onClick={() =>
                  cartDispatch({ type: "remove", payload: item.item })
                }
              >
                X
              </button>
            </div>

            <span className="w-[3ch] text-end">{`$${item.item.price}`}</span>
          </div>
        ))}
      </div>
      <div className="flex items-end justify-between px-4 py-2">
        <button className="btn">Checkout</button>
        <p className="">{`Total: $${cartItems.total}`}</p>
      </div>
    </div>
  );
};

export default CartContent;
