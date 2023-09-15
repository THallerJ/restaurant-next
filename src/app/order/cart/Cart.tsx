"use client";
import YourOrder from "./components/YourOrder";
import YourInformation from "./components/YourInformation";

const Cart = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex h-full w-full flex-col gap-4 rounded-lg 
          border-4 border-dark bg-white p-4"
      >
        <YourOrder />
        <YourInformation />
        <button className="btn self-end" type="submit">
          Finish order
        </button>
      </form>
    </div>
  );
};

export default Cart;
