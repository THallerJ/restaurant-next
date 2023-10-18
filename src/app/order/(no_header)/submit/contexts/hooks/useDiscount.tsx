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

    setDiscountCode(currCode);
    setDiscountPercent(discount);
    if (cartItems.total !== total) setDiscountItems({ count, total, items });
    notifyDiscount();
  };

  const resetDiscount = () => {
    setResetFlag(true);
    setDiscountCode(null);
    setDiscountItems(null);
    setDiscountPercent(0);
  };

  useEffect(() => {
    if (!notifiedDiscount) setResetFlag(false);
  }, [notifiedDiscount]);

  return {
    discountItems,
    discountPercent,
    discountCode,
    notifiedDiscount,
    updateDiscount,
    resetFlag,
    resetDiscount,
  };
};

export default useDiscount;
