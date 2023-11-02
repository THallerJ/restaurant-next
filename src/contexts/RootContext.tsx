"use client";
import { createContext, useContext, useRef, createRef } from "react";

type RootContextProps = {
  rootRef: React.MutableRefObject<HTMLDivElement | null>;
};

const initialState: RootContextProps = {
  rootRef: createRef(),
};

const RootContext = createContext<RootContextProps>(initialState);

type RootContextProviderProps = {
  children: React.ReactNode;
};

export const RootContextProvider = ({ children }: RootContextProviderProps) => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  const value = {
    rootRef,
  };

  return <RootContext.Provider value={value}>{children}</RootContext.Provider>;
};

export const useRootContext = () => useContext(RootContext);
