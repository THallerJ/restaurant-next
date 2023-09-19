import LayoutWrapper from "./wrappers/LayoutWrapper";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center bg-offwhite pb-8 pt-2">
      <LayoutWrapper>
        <div className="page-scale flex pt-8">{children}</div>
      </LayoutWrapper>
    </div>
  );
};

export default layout;
