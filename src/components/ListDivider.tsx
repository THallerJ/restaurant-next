const ListDivider = ({ show }: { show: boolean }) => {
  return show ? <div className="h-px w-full bg-dark/20" /> : null;
};

export default ListDivider;
