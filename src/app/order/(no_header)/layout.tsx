const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center bg-offwhite py-4">
      <div className="page-scale">{children}</div>
    </div>
  );
};

export default layout;
