"use client";
import { Time } from "@/assets";
import { useOrder } from "../contexts/OrderContext";
import { AnimatedButton, InputList, ListDivider } from "@/components";
import { generateTimes, formatTime } from "@/utils";
import { useState } from "react";

const Cart = () => {
  const { cartItems } = useOrder();
  const [time, setTime] = useState<[number, number] | null>(null);

  const inputGroup = "flex flex-col gap-4 sm:flex-row";
  const inputStyle = "input w-full";

  const OrderList = () => {
    return (
      <div className="flex w-full flex-col">
        {cartItems.items.map((item, index) => (
          <>
            <div key={item.item.name} className="flex justify-between p-1">
              <span className="w-[50%]">{item.item.name}</span>
              <span className="w-[3ch]">{item.count}</span>
              <span className=" ">{`$${item.item.price}`}</span>
            </div>
            <ListDivider show={index !== cartItems.items.length - 1} />
          </>
        ))}
        <div className="self-end pt-4">
          <p className="text-lg font-semibold">{`Total: $${cartItems.total}`}</p>
        </div>
      </div>
    );
  };

  const DiscountCode = () => {
    return (
      <div className="flex w-full flex-col items-center justify-center py-4 sm:py-0">
        <input
          className="input w-full sm:w-[85%] md:w-[75%] lg:w-[60%]"
          placeholder="Discount Code"
        />
        <AnimatedButton className=" w-full sm:w-[85%] md:w-[75%] lg:w-[60%]">
          Apply code
        </AnimatedButton>
      </div>
    );
  };

  const YourOrder = () => {
    return (
      <div className="flex flex-col">
        <h2 className="heading-sm self-start pb-1">Your order</h2>
        <div className="flex flex-col gap-0 sm:flex-row sm:gap-4">
          <OrderList />
          <DiscountCode />
        </div>
      </div>
    );
  };

  const YourInformation = () => {
    return (
      <div>
        <h2 className="heading-sm pb-1">Your information</h2>
        <div className="flex flex-col gap-4">
          <InputList
            text={time !== null ? formatTime(...time) : undefined}
            items={generateTimes(new Date())}
            format={(item) => formatTime(...item)}
            onSelect={(item) => {
              setTime(item);
            }}
            placeholder="Pickup Time"
            className={`${inputStyle} sm:mb-5 sm:w-44`}
            Icon={Time}
            center
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
        </div>
      </div>
    );
  };

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
