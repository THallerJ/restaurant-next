"use client";
import { HeaderLayoutContextProvider } from "../contexts/HeaderLayoutContext";

const HeaderLayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return <HeaderLayoutContextProvider>{children}</HeaderLayoutContextProvider>;
};

export default HeaderLayoutWrapper;
