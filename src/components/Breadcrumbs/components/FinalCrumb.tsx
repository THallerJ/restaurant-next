type FinalCrumbProps = {
  onNext: () => void;
  children: React.ReactNode;
};

const FinalCrumb = ({ onNext, children }: FinalCrumbProps) => {
  return (
    <form
      className="h-full rounded-b-lg bg-second"
      onSubmit={(e) => {
        e.preventDefault();
        onNext();
      }}
    >
      {children}
    </form>
  );
};

export default FinalCrumb;
