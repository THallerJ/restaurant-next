type PairItemProps = {
  children: React.ReactNode;
};

const PairItem = ({ children }: PairItemProps) => {
  return (
    <div className="w-full text-center xs:w-3/4 sm:w-1/2"> {children}</div>
  );
};

export default PairItem;
