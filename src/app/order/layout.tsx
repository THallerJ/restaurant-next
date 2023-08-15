import React from "react";
import MenuHeader from "./components/MenuHeader";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-[50%] flex-col items-center bg-offwhite p-3">
      <MenuHeader />
      {children}
    </div>
  );
};

export default layout;
