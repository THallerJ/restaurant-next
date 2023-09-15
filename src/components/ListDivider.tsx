const ListDivider = ({ show }: { show: boolean }) => {
  return show ? <div className="h-[1px] w-full bg-dark/[10%]" /> : null;
};

export default ListDivider;
