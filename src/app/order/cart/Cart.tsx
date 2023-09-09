"use client";
import { Time } from "@/assets";
import { useOrder } from "../contexts/OrderContext";
import { InputList } from "@/components";

const Cart = () => {
  const { cartItems } = useOrder();

  const inputStyle =
    "rounded-lg border-2 border-darkLight h-[3em] px-3 w-full shadow-md active:border-dark";

  const inputGroup = "flex flex-col gap-4 sm:flex-row";

  return (
    <div className="flex w-full items-center justify-center">
      <div
        className="flex h-full w-full flex-col gap-4 rounded-2xl 
        border-4 border-dark bg-white p-4"
      >
        <div>
          <h2 className="heading-sm pb-1">Your order</h2>
          {cartItems.items.map((item) => (
            <div key={item.item.name}>
              <span className="text-sm">{item.item.name}</span>
            </div>
          ))}
        </div>
        <div>
          <h2 className="heading-sm pb-1">Your information</h2>

          <div className="flex flex-col gap-4">
            <InputList
              items={[]}
              onSelect={() => {}}
              placeholder="Select Pickup Time"
              className={`mb-5 w-56 ${inputStyle}`}
              Icon={Time}
            />
            <div className={inputGroup}>
              <input required placeholder="First Name" className={inputStyle} />
              <input required placeholder="Last Name" className={inputStyle} />
            </div>
            <div className={inputGroup}>
              <input
                required
                placeholder="Email Address"
                type="email"
                className={inputStyle}
              />
              <input
                required
                placeholder="Phone Number"
                type="tele"
                className={inputStyle}
              />
            </div>
            <button className="btn self-end">Finish order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
