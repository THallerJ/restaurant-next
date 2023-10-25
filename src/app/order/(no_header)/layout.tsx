const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-[66%] justify-center bg-offwhite py-4">
      <div className="page-scale">{children}</div>
    </div>
  );
};

export default layout;
