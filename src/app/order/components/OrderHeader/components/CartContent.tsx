import { useOrder } from "@/app/order/contexts/OrderContext";

const CartContent = () => {
  const { cartItems, cartDispatch } = useOrder();

  return (
    <div className="flex h-full flex-col justify-between font-semibold text-black">
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
            </div>

            <span className="w-[3ch] text-end">{`$${item.item.price}`}</span>
          </div>
        ))}
      </div>
      <p className="self-end p-4">{`Total: $${cartItems.total}`}</p>
    </div>
  );
};

export default CartContent;
