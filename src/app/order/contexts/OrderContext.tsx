"use client";
import { menuItem } from "@/types";
import { createContext, useContext, useState } from "react";
import useOrderReducer from "./hooks/useOrderReducer";

type orderItem = {
  item: menuItem;
  count: number;
};

type OrderContextProps = {
  orderItems: orderItem[];
  setOrderItems: React.Dispatch<React.SetStateAction<orderItem[]>>;
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
  const [orderItems, setOrderItems] = useState<orderItem[]>([]);
  const [reducer, dispatch] = useOrderReducer();

  const value = {
    orderItems,
    setOrderItems,
  };

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
