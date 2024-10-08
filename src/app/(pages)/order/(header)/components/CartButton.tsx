import { Cart } from "@/assets";
import { useOrderContext } from "../../contexts/order_context/OrderContext";
import CartContent from "./CartContent";
import { useCartContext } from "../../contexts/CartContext";

const CartButton = () => {
  const { cartItems } = useOrderContext();
  const { clicked, setClicked, hover, setHover, closeCart } = useCartContext();

  return (
    <>
      <div
        className="relative z-[5]"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <button onClick={() => setClicked((prev) => !prev)}>
          <Cart className="h-7 w-7" />
          {cartItems.count > 0 ? (
            <div
              className="absolute bottom-1 left-4 flex h-5 w-5 items-center 
                justify-center rounded-full bg-dark"
            >
              <span className="text-sm font-semibold text-offwhite">
                {cartItems.count}
              </span>
            </div>
          ) : null}
        </button>
        <div
          className={`absolute right-0 top-full h-96 w-64 origin-top-right 
            scale-0 rounded-lg bg-white text-black shadow-lg transition-all 
            xs:w-80 ${clicked || hover ? "scale-100" : null}`}
        >
          <CartContent />
        </div>
      </div>
      <div
        onClick={() => closeCart()}
        className={`fixed right-0 top-0 h-full w-full scale-0 bg-dark/50 ${
          clicked || hover ? "scale-100" : null
        }`}
      />
    </>
  );
};

export default CartButton;
