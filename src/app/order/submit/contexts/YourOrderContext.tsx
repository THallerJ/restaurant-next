"use client";
import { createContext, useContext } from "react";
import { cartItems } from "@/app/order/types";
import useDiscount from "./hooks/useDiscount";

type YourOrderContextProps = {
  discountItems: cartItems | null;
  discountPercent: number;
  discountCode: string | null;
  updateDiscount: (currCode: string) => void;
  resetDiscount: () => void;
  notifiedDiscount: boolean;
  resetFlag: boolean;
};

const initialState: YourOrderContextProps = {
  discountItems: null,
  discountPercent: 0,
  discountCode: null,
  updateDiscount: () => {},
  resetDiscount: () => {},
  notifiedDiscount: false,
  resetFlag: false,
};

const YourOrderContext = createContext<YourOrderContextProps>(initialState);

type YourOrderContextProviderProps = {
  children: React.ReactNode;
};

export const YourOrderContextProvider = ({
  children,
}: YourOrderContextProviderProps) => {
  const {
    discountItems,
    discountPercent,
    discountCode,
    notifiedDiscount,
    updateDiscount,
    resetFlag,
    resetDiscount,
  } = useDiscount();

  const value = {
    discountItems,
    discountPercent,
    discountCode,
    updateDiscount,
    resetDiscount,
    notifiedDiscount,
    resetFlag,
  };

  return (
    <YourOrderContext.Provider value={value}>
      {children}
    </YourOrderContext.Provider>
  );
};

export const useYourOrder = () => useContext(YourOrderContext);
