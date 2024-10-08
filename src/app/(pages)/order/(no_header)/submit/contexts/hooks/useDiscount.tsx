import { useState, useEffect } from "react";
import { cartItems } from "@/app/(pages)/order/types";
import { useOrderContext } from "../../../../contexts/order_context/OrderContext";
import { getDiscountPercent, roundNum } from "@/app/(pages)/order/utils";
import { useNotify } from "@/hooks";

const useDiscount = () => {
  const { cartItems } = useOrderContext();
  const [discountItems, setDiscountItems] = useState<cartItems | null>(null);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [discountCode, setDiscountCode] = useState<string | null>(null);
  const [notifiedDiscount, notifyDiscount] = useNotify(2500);
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
    setInvalidFlag(false);
    setDiscountCode(null);
    setDiscountItems(null);
    setDiscountPercent(0);
  };

  useEffect(() => {
    if (!notifiedDiscount) setInvalidFlag(false);
  }, [notifiedDiscount]);

  return {
    discountItems,
    discountPercent,
    discountCode,
    notifiedDiscount,
    updateDiscount,
    resetDiscount,
    invalidFlag,
  };
};

export default useDiscount;
