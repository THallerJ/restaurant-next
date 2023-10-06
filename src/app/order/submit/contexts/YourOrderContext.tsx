"use client";
import { createContext, useContext, useState } from "react";
import { cartItems } from "@/app/order/types";

type YourOrderContextProps = {
  discountItems: cartItems | null;
  setDiscountItems: React.Dispatch<React.SetStateAction<cartItems | null>>;
};

const initialState: YourOrderContextProps = {
  discountItems: null,
  setDiscountItems: () => {},
};

const YourOrderContext = createContext<YourOrderContextProps>(initialState);

type YourOrderContextProviderProps = {
  children: React.ReactNode;
};

export const YourOrderContextProvider = ({
  children,
}: YourOrderContextProviderProps) => {
  const [discountItems, setDiscountItems] = useState<cartItems | null>(null);

  const value = {
    discountItems,
    setDiscountItems,
  };

  return (
    <YourOrderContext.Provider value={value}>
      {children}
    </YourOrderContext.Provider>
  );
};

export const useYourOrder = () => useContext(YourOrderContext);
