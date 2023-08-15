import React from "react";
import MenuHeader from "./components/MenuHeader";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-[50%] flex-col items-center bg-offwhite pb-0 pt-2">
      <MenuHeader />
      <div className="page-scale">{children}</div>
    </div>
  );
};

export default layout;
