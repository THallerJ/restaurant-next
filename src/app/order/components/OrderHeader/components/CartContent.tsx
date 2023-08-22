import { useOrder } from "@/app/order/contexts/OrderContext";

const CartContent = () => {
  const { cartItems, cartDispatch } = useOrder();

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="overflow-auto">
        {cartItems.items.map((item) => (
          <div key={item.item.name} className="flex justify-between text-sm">
            <p className="w-36">{item.item.name}</p>
            <div className="flex">
              <button
                className="mr-4"
                onClick={() =>
                  cartDispatch({ type: "delete", payload: item.item })
                }
              >
                -
              </button>
              <span>{item.count}</span>
              <button
                className="ml-4"
                onClick={() =>
                  cartDispatch({ type: "add", payload: item.item })
                }
              >
                +
              </button>
            </div>

            <span>{`$${item.item.price}`}</span>
          </div>
        ))}
      </div>
      <p className="self-end">{`Total: $${cartItems.total}`}</p>
    </div>
  );
};

export default CartContent;
