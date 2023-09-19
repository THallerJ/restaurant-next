"use client";
import { useOrder } from "@/app/order/contexts/OrderContext";
import { Close } from "@/assets";
import { ListDivider } from "@/components";
import { useRouter } from "next/navigation";

type CartContentProps = {
  closeCart: () => void;
};
const CartContent = ({ closeCart }: CartContentProps) => {
  const { cartItems, cartDispatch } = useOrder();
  const router = useRouter();

  const onCheckout = () => {
    closeCart();
    router.push("cart");
  };

  return (
    <div
      className={`flex h-full flex-col ${
        cartItems.count > 0 ? "justify-between" : "justify-start"
      }`}
    >
      <div className="flex justify-between px-4 pt-4">
        <h2 className="heading-sm font-normal">Cart</h2>
        <button
          className={`text-sm font-normal lowercase text-dark ${
            cartItems.count > 0 ? "block" : "hidden"
          }`}
          onClick={() => cartDispatch({ type: "clear" })}
        >
          Clear Cart
        </button>
      </div>
      {cartItems.count > 0 ? (
        <>
          <div className="flex h-full flex-col overflow-auto p-4">
            {cartItems.items.map((item, index) => (
              <div key={item.item.name} className="flex flex-col">
                <div className="flex items-center justify-between py-2 text-sm">
                  <p className="w-5/12">{item.item.name}</p>
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
                <ListDivider show={index !== cartItems.items.length - 1} />
              </div>
            ))}
          </div>
          <div className="flex items-end justify-between px-4 py-2">
            <button
              className="btn"
              aria-label="checkout"
              onClick={() => onCheckout()}
            >
              Checkout
            </button>
            <p className="font-semibold text-dark">{`Total: $${cartItems.total}`}</p>
          </div>
        </>
      ) : (
        <div className="flex h-full items-center justify-center">
          <p>Your cart is empty</p>
        </div>
      )}
    </div>
  );
};

export default CartContent;
