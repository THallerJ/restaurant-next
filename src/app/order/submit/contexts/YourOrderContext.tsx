"use client";
import { createContext, useContext, useState } from "react";
import { cartItems } from "@/app/order/types";

type YourOrderContextProps = {
  discountItems: cartItems | null;
  setDiscountItems: React.Dispatch<React.SetStateAction<cartItems | null>>;
  discountPercent: number;
  setDiscountPercent: React.Dispatch<React.SetStateAction<number>>;
  discountCode: string | null;
  setDiscountCode: React.Dispatch<React.SetStateAction<string | null>>;
};

const initialState: YourOrderContextProps = {
  discountItems: null,
  setDiscountItems: () => {},
  discountPercent: 0,
  setDiscountPercent: () => {},
  discountCode: null,
  setDiscountCode: () => {},
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

  const value = {
    discountItems,
    setDiscountItems,
    discountPercent,
    setDiscountPercent,
    discountCode,
    setDiscountCode,
  };

  return (
    <YourOrderContext.Provider value={value}>
      {children}
    </YourOrderContext.Provider>
  );
};

export const useYourOrder = () => useContext(YourOrderContext);
