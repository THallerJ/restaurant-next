"use client";
import { createContext, useContext, useState } from "react";
import { useNotify } from "@/hooks";

type CartContextProps = {
  showUndo: boolean;
  notifyUndo: () => void;
  cancelUndo: () => void;
  hover: boolean;
  setHover: React.Dispatch<React.SetStateAction<boolean>>;
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
  closeCart: () => void;
};

const initialState: CartContextProps = {
  showUndo: false,
  notifyUndo: () => {},
  cancelUndo: () => {},
  hover: false,
  setHover: () => {},
  clicked: false,
  setClicked: () => {},
  closeCart: () => {},
};

const CartContext = createContext<CartContextProps>(initialState);

type CartContextProviderProps = {
  children: React.ReactNode;
};

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [showUndo, notifyUndo, cancelUndo] = useNotify(3000);
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  const closeCart = (): void => {
    setClicked(false);
    setHover(false);
  };

  const value = {
    showUndo,
    notifyUndo,
    cancelUndo,
    hover,
    setHover,
    clicked,
    setClicked,
    closeCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);
