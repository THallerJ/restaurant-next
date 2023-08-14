import React from "react";
import MenuHeader from "./components/MenuHeader";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full flex-col items-center bg-offwhite p-3">
      <MenuHeader />
      {children}
    </div>
  );
};

export default layout;
