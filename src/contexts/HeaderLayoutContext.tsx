"use client";
import { createContext, useContext, useRef, useState } from "react";

type HeaderLayoutContextProps = {
  headerRef: React.MutableRefObject<HTMLDivElement | null> | null;
  headerLayoutRef: React.MutableRefObject<HTMLDivElement | null> | null;
  getHeaderHeight: () => number;
  autoScroll: boolean;
  setAutoScroll: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialState: HeaderLayoutContextProps = {
  headerRef: null,
  headerLayoutRef: null,
  getHeaderHeight: () => 0,
  autoScroll: false,
  setAutoScroll: () => {},
};

const HeaderLayoutContext =
  createContext<HeaderLayoutContextProps>(initialState);

type HeaderLayoutContextProviderProps = {
  children: React.ReactNode;
};

export const HeaderLayoutContextProvider = ({
  children,
}: HeaderLayoutContextProviderProps) => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const headerLayoutRef = useRef<HTMLDivElement | null>(null);
  const [autoScroll, setAutoScroll] = useState(false);

  const getHeaderHeight = (): number => headerRef?.current?.offsetHeight || 0;

  const value = {
    headerRef,
    headerLayoutRef,
    getHeaderHeight,
    autoScroll,
    setAutoScroll,
  };

  return (
    <HeaderLayoutContext.Provider value={value}>
      {children}
    </HeaderLayoutContext.Provider>
  );
};

export const useHeaderLayoutContext = () => useContext(HeaderLayoutContext);
