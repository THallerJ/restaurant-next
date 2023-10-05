import { InputLabel, AnimatedButton } from "@/components";
import { cartItems } from "../../../types";
import { useOrder } from "../../../contexts/order_context/OrderContext";
import { getDiscountPercent, roundNum } from "./utils";

type DiscountCodeProps = {
  setDiscountItems: React.Dispatch<React.SetStateAction<cartItems | null>>;
};

const DiscountCode = ({ setDiscountItems }: DiscountCodeProps) => {
  const { cartItems } = useOrder();

  const getDiscount = () => {
    let total = cartItems.total;
    const count = cartItems.count;

    const items = cartItems.items.map((curr) => {
      const prevPrice = curr.item.price;
      const newPrice = roundNum(prevPrice * (1 - getDiscountPercent("00000")));

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
        />
        <AnimatedButton className="mt-2" fullSize onClick={getDiscount}>
          Apply code
        </AnimatedButton>
      </div>
    </div>
  );
};

export default DiscountCode;

/* 
   count
   total
   items
    [0]
      count
      item
        details
        image
        name
        price
         // const item = { ...curr.item, price: prevPrice * (1 - 0.2) };

   */
