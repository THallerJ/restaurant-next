"use client";
import { useRootContext, RootContextProvider } from "@/contexts";

type RootWrapperProps = {
  children: React.ReactNode;
};

const RootWrapper = ({ children }: RootWrapperProps) => {
  return (
    <RootContextProvider>
      <RefWrapper>{children}</RefWrapper>
    </RootContextProvider>
  );
};

export default RootWrapper;

const RefWrapper = ({ children }: RootWrapperProps) => {
  const { rootRef } = useRootContext();

  return (
    <div className="h-full w-full" ref={rootRef}>
      {children}
    </div>
  );
};
