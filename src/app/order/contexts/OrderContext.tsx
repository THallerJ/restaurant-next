"use client";
import { cartItems } from "../types";
import { reducerAction } from "./types";
import { createContext, useContext } from "react";
import useCartReducer from "./hooks/useCartReducer";

type OrderContextProps = {
  cartItems: cartItems;
  cartDispatch: React.Dispatch<reducerAction>;
};

const initialState: OrderContextProps = {
  cartItems: { count: 0, total: 0, items: [] },
  cartDispatch: () => {},
};

const OrderContext = createContext<OrderContextProps>(initialState);

type OrderContextProviderProps = {
  children: React.ReactNode;
};

export const OrderContextProvider = ({
  children,
}: OrderContextProviderProps) => {
  const [cartItems, cartDispatch] = useCartReducer();

  const value = { cartItems, cartDispatch };

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
