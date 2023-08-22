import { useOrder } from "@/app/order/contexts/OrderContext";

const CartContent = () => {
  const { cartItems, cartDispatch } = useOrder();

  return (
    <>
      {cartItems.items.map((item) => (
        <div
          key={item.item.name}
          className="flex justify-between gap-12 text-sm"
        >
          <p className="w-48">{item.item.name}</p>
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
              onClick={() => cartDispatch({ type: "add", payload: item.item })}
            >
              +
            </button>
          </div>

          <span>{`$${item.item.price}`}</span>
        </div>
      ))}
      <p>{`Total: $${cartItems.total}`}</p>
    </>
  );
};

export default CartContent;
