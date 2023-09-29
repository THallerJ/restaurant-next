type HeaderInfoWrapperProps = {
  doPersistNav: boolean;
  children: React.ReactNode;
};

const HeaderInfoWrapper = ({
  doPersistNav,
  children,
}: HeaderInfoWrapperProps) => {
  return (
    <div
      className={`pointer-events-auto w-full justify-end pt-1 
        ${doPersistNav ? "hidden" : "hidden md:flex"}`}
    >
      {children}
    </div>
  );
};

export default HeaderInfoWrapper;
