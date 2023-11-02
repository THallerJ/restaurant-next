"use client";
import { cartItems } from "../../types";
import { reducerAction } from "./types";
import { createContext, useContext } from "react";
import useCartReducer from "./hooks/useCartReducer";

type OrderContextProps = {
  cartItems: cartItems;
  cartDispatch: React.Dispatch<reducerAction>;
  cartInit: boolean;
};

const initialState: OrderContextProps = {
  cartItems: { count: 0, total: 0, items: [] },
  cartDispatch: () => {},
  cartInit: false,
};

const OrderContext = createContext<OrderContextProps>(initialState);

type OrderContextProviderProps = {
  children: React.ReactNode;
};

export const OrderContextProvider = ({
  children,
}: OrderContextProviderProps) => {
  const [cartItems, cartDispatch, cartInit] = useCartReducer();

  const value = { cartItems, cartDispatch, cartInit };

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};

export const useOrderContext = () => useContext(OrderContext);
