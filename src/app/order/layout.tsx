import LayoutWrapper from "./wrappers/LayoutWrapper";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex  flex-col items-center bg-offwhite pb-8 pt-2 xsm:min-h-[66%]">
      <LayoutWrapper>
        <div className="page-scale flex flex-1 flex-col py-8">{children}</div>
      </LayoutWrapper>
    </div>
  );
};

export default layout;
