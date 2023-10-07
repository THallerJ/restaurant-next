"use client";
import { createContext, useContext, useState } from "react";
import { cartItems } from "@/app/order/types";
import { useOrder } from "../../contexts/order_context/OrderContext";
import { getDiscountPercent } from "../../utils";
import { roundNum } from "../../utils";

type YourOrderContextProps = {
  discountItems: cartItems | null;
  discountPercent: number;
  discountCode: string | null;
  updateDiscount: (currCode: string) => void;
};

const initialState: YourOrderContextProps = {
  discountItems: null,
  discountPercent: 0,
  discountCode: null,
  updateDiscount: (currCode: string) => {},
};

const YourOrderContext = createContext<YourOrderContextProps>(initialState);

type YourOrderContextProviderProps = {
  children: React.ReactNode;
};

export const YourOrderContextProvider = ({
  children,
}: YourOrderContextProviderProps) => {
  const [discountItems, setDiscountItems] = useState<cartItems | null>(null);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [discountCode, setDiscountCode] = useState<string | null>(null);
  const { cartItems } = useOrder();

  const updateDiscount = (currCode: string) => {
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

  const value = {
    discountItems,
    discountPercent,
    discountCode,
    updateDiscount,
  };

  return (
    <YourOrderContext.Provider value={value}>
      {children}
    </YourOrderContext.Provider>
  );
};

export const useYourOrder = () => useContext(YourOrderContext);
