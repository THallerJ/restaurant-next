import { InputLabel, AnimatedButton } from "@/components";
import { useOrder } from "../../../contexts/order_context/OrderContext";
import { discountCodes } from "@/constants";
import { useState } from "react";
import { useYourOrder } from "../../contexts/YourOrderContext";

const DiscountCode = () => {
  const { cartItems } = useOrder();
  const [currCode, setCurrCode] = useState("");
  const { setDiscountItems } = useYourOrder();

  const getDiscount = () => {
    let total = cartItems.total;
    const count = cartItems.count;

    const items = cartItems.items.map((curr) => {
      const prevPrice = curr.item.price;
      const newPrice = roundNum(prevPrice * (1 - getDiscountPercent(currCode)));

      total = roundNum(total - (prevPrice - newPrice));

      return { ...curr, item: { ...curr.item, price: newPrice } };
    });

    setDiscountItems({ count, total, items });
  };

  return (
    <div className="flex w-full justify-center sm:px-4">
      <div className="flex w-full flex-col items-center sm:w-5/6 lg:w-2/3">
        <InputLabel
          id="discount_code"
          className="input text-2xl tracking-widest"
          format="#####"
          mask="_"
          label="Discount Code"
          placeholder="_____"
          onChange={(e) => setCurrCode(e.target.value)}
        />
        <AnimatedButton className="mt-2" fullSize onClick={getDiscount}>
          Apply code
        </AnimatedButton>
      </div>
    </div>
  );
};

export default DiscountCode;

const getDiscountPercent = (code: string): number => {
  const item = discountCodes.find((elem) => elem.code === code);
  return item ? item.percent / 100 : 0;
};

const roundNum = (num: number) => Number(num.toFixed(2));
