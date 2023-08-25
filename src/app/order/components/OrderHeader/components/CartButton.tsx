import { Cart } from "@/assets";
import { useOrder } from "@/app/order/contexts/OrderContext";
import CartContent from "./CartContent";

const CartButton = () => {
  const { cartItems } = useOrder();

  return (
    <>
      <div className="group peer relative z-[5]">
        <button>
          <Cart className="h-7 w-7" />
          {cartItems.count > 0 ? (
            <div
              className="absolute bottom-2 left-4 flex h-5 w-5 items-center justify-center 
                rounded-full bg-dark"
            >
              <span className="text-sm font-semibold text-offwhite">
                {cartItems.count}
              </span>
            </div>
          ) : null}
        </button>
        <div
          className="absolute right-0 top-full h-96 w-80 scale-0 rounded-lg border-2 border-dark 
          bg-white text-dark shadow-lg group-focus-within:scale-100 group-hover:scale-100"
        >
          <CartContent />
        </div>
      </div>
      <div
        className="fixed right-0 top-0 h-full w-full scale-0 bg-dark/50 peer-focus-within:scale-100 
          peer-hover:scale-100"
      />
    </>
  );
};

export default CartButton;
