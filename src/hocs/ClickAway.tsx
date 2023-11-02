"use client";
import { useEffect, useRef } from "react";
import { useRootContext } from "@/contexts";

// This component triggers a callback when the mouse is clicked outside the child element
type ClickAwayProps = {
  callback: () => void;
  children: React.ReactNode;
};

export const ClickAway = ({ callback, children }: ClickAwayProps) => {
  const { rootRef } = useRootContext();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    rootRef.current?.addEventListener("mousedown", handleClickOutside);

    return () => {
      rootRef.current?.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);

  return (
    <div className="h-full w-full" ref={ref}>
      {children}
    </div>
  );
};

export default ClickAway;
