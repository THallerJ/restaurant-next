type CrumbProps = {
  children: React.ReactNode;
};

const Crumb = ({ children }: CrumbProps) => {
  return <div className="h-full rounded-b-lg bg-second">{children}</div>;
};

export default Crumb;
