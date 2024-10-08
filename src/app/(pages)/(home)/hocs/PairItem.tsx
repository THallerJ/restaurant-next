type PairItemProps = {
  children: React.ReactNode;
};

const PairItem = ({ children }: PairItemProps) => {
  return <div className="w-full text-center sm:w-1/2 "> {children}</div>;
};

export default PairItem;
