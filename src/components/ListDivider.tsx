const ListDivider = ({ show }: { show: boolean }) => {
  return show ? <div className="h-px w-full bg-dark/10" /> : null;
};

export default ListDivider;
