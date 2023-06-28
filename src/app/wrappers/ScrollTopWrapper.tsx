"use client";
import { useEffect } from "react";
import { useHeaderLayoutContext } from "@/contexts";
import { usePathname } from "next/navigation";

const ScrollTopWrapper = ({ children }: { children: React.ReactNode }) => {
  const { headerLayoutRef } = useHeaderLayoutContext();
  const pathname = usePathname();

  useEffect(() => {
    headerLayoutRef?.current?.scrollTo(0, 0);
  }, [pathname, headerLayoutRef]);

  return (
    <div
      className="relative h-full overflow-auto overscroll-none bg-dark"
      ref={headerLayoutRef}
    >
      {children}
    </div>
  );
};

export default ScrollTopWrapper;
