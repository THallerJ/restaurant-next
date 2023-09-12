"use client";
import { Time } from "@/assets";
import { useOrder } from "../contexts/OrderContext";
import { InputList } from "@/components";
import { generateTimes, formatTime } from "@/utils";

const Cart = () => {
  const { cartItems } = useOrder();

  const inputGroup = "flex flex-col gap-4 sm:flex-row";

  return (
    <div className="flex w-full items-center justify-center">
      <div
        className="flex h-full w-full flex-col gap-4 rounded-lg 
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
              items={generateTimes(new Date())}
              format={(item) => formatTime(item[0], item[1])}
              onSelect={(item) => {}}
              placeholder="Pickup Time"
              className={`input mb-5 w-full sm:w-40`}
              Icon={Time}
              center
            />
            <div className={inputGroup}>
              <input
                required
                placeholder="First Name"
                className="input w-full"
              />
              <input
                required
                placeholder="Last Name"
                className="input w-full"
              />
            </div>
            <div className={inputGroup}>
              <input
                required
                placeholder="Email Address"
                type="email"
                className="input w-full"
              />
              <input
                required
                placeholder="Phone Number"
                type="tele"
                className="input w-full"
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
