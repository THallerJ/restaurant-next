"use client";
import { HeaderLayoutContextProvider } from "../contexts";

const HeaderLayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return <HeaderLayoutContextProvider>{children}</HeaderLayoutContextProvider>;
};

export default HeaderLayoutWrapper;
