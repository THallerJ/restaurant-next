import { useState, useEffect } from "react";
import { cartItems } from "@/app/order/types";
import { useOrder } from "../../../../contexts/order_context/OrderContext";
import { getDiscountPercent, roundNum } from "@/app/order/utils";
import { useNotify } from "@/hooks";

const useDiscount = () => {
  const { cartItems } = useOrder();
  const [discountItems, setDiscountItems] = useState<cartItems | null>(null);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [discountCode, setDiscountCode] = useState<string | null>(null);
  const [notifiedDiscount, notifyDiscount] = useNotify(3000);
  const [resetFlag, setResetFlag] = useState(false);
  const [invalidFlag, setInvalidFlag] = useState(false);

  const updateDiscount = (currCode: string) => {
    const discount = getDiscountPercent(currCode);

    let total = cartItems.total;
    const count = cartItems.count;

    const items = cartItems.items.map((curr) => {
      const prevPrice = curr.item.price;
      const newPrice = roundNum(prevPrice * (1 - discount));

      total = roundNum(total - (prevPrice - newPrice));

      return { ...curr, item: { ...curr.item, price: newPrice } };
    });

    if (discount > 0) {
      setDiscountCode(currCode);
      setDiscountPercent(discount);
      setDiscountItems({ count, total, items });
    } else setInvalidFlag(true);

    notifyDiscount();
  };

  const resetDiscount = () => {
    setResetFlag(true);
    setInvalidFlag(false);
    setDiscountCode(null);
    setDiscountItems(null);
    setDiscountPercent(0);
  };

  useEffect(() => {
    if (!notifiedDiscount) {
      setResetFlag(false);
      setInvalidFlag(false);
    }
  }, [notifiedDiscount]);

  return {
    discountItems,
    discountPercent,
    discountCode,
    notifiedDiscount,
    updateDiscount,
    resetFlag,
    resetDiscount,
    invalidFlag,
  };
};

export default useDiscount;
