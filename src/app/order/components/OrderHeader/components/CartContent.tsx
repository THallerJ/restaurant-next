import { useOrder } from "@/app/order/contexts/OrderContext";

const CartContent = () => {
  const { cartItems, cartDispatch } = useOrder();

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex flex-col gap-1 overflow-auto p-4 ">
        {cartItems.items.map((item) => (
          <div key={item.item.name} className="flex justify-between text-sm">
            <p className="w-44">{item.item.name}</p>
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

            <span className="w-8">{`$${item.item.price}`}</span>
          </div>
        ))}
      </div>
      <p className="self-end p-4">{`Total: $${cartItems.total}`}</p>
    </div>
  );
};

export default CartContent;
