"use client";
import { createContext, useContext } from "react";
import { cartItems } from "../../../types";
import useDiscount from "./hooks/useDiscount";

type YourOrderContextProps = {
  discountItems: cartItems | null;
  discountPercent: number;
  discountCode: string | null;
  updateDiscount: (currCode: string) => void;
  resetDiscount: () => void;
  invalidFlag: boolean;
};

const initialState: YourOrderContextProps = {
  discountItems: null,
  discountPercent: 0,
  discountCode: null,
  updateDiscount: () => {},
  resetDiscount: () => {},
  invalidFlag: false,
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
    updateDiscount,
    resetDiscount,
    invalidFlag,
  } = useDiscount();

  const value = {
    discountItems,
    discountPercent,
    discountCode,
    updateDiscount,
    resetDiscount,
    invalidFlag,
  };

  return (
    <YourOrderContext.Provider value={value}>
      {children}
    </YourOrderContext.Provider>
  );
};

export const useYourOrder = () => useContext(YourOrderContext);
