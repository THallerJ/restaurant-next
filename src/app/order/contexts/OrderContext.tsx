"use client";
import { menuItem } from "@/types";
import { createContext, useContext, useState } from "react";

type OrderContextProps = {
  orderItems: menuItem[];
  setOrderItems: React.Dispatch<React.SetStateAction<menuItem[]>>;
};

const initialState: OrderContextProps = {
  orderItems: [],
  setOrderItems: () => {},
};

const OrderContext = createContext<OrderContextProps>(initialState);

type OrderContextProviderProps = {
  children: React.ReactNode;
};

export const OrderContextProvider = ({
  children,
}: OrderContextProviderProps) => {
  const [orderItems, setOrderItems] = useState<menuItem[]>([]);

  const value = {
    orderItems,
    setOrderItems,
  };

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
