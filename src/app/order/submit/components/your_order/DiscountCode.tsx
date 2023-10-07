import { InputLabel, AnimatedButton } from "@/components";
import { useOrder } from "../../../contexts/order_context/OrderContext";
import { useState } from "react";
import { useYourOrder } from "../../contexts/YourOrderContext";
import { getDiscountPercent, roundNum } from "@/app/order/utils";

const DiscountCode = () => {
  const { cartItems } = useOrder();
  const [currCode, setCurrCode] = useState("");
  const { setDiscountItems } = useYourOrder();
  const [discountPercent, setDiscountPercent] = useState(0);
  const [discountCode, setDiscountCode] = useState<string | null>(null);

  const getDiscount = () => {
    const discount = getDiscountPercent(currCode);

    if (discount > 0) {
      let total = cartItems.total;
      const count = cartItems.count;

      const items = cartItems.items.map((curr) => {
        const prevPrice = curr.item.price;
        const newPrice = roundNum(prevPrice * (1 - discount));

        total = roundNum(total - (prevPrice - newPrice));

        return { ...curr, item: { ...curr.item, price: newPrice } };
      });

      setDiscountCode(currCode);
      setDiscountPercent(discount);
      setDiscountItems({ count, total, items });
    }
  };

  return (
    <div className="flex w-full items-start justify-center sm:px-4">
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
        <div className="mt-4 w-full rounded-lg border-2 border-green-400 px-2 py-1 text-sm">
          {discountPercent * 100}% discount applied with code{" "}
          <span className="rounded-lg bg-green-300 px-1">{discountCode}</span>!
        </div>
      </div>
    </div>
  );
};

export default DiscountCode;
