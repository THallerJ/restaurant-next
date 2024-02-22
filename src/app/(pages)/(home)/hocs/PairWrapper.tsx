type PairWrapperProps = {
  children: React.ReactNode;
  reverse?: boolean;
  sectionId?: string;
  className?: string;
};

const PairWrapper = ({
  children,
  sectionId,
  reverse,
  className,
}: PairWrapperProps) => {
  return (
    <section
      id={sectionId}
      className={`page-scale flex items-center justify-center
        ${className}`}
    >
      <div
        className={`flex items-center justify-center gap-12 sm:w-11/12 sm:flex-row 
          sm:justify-between sm:gap-8 lg:w-3/4 xxl:w-2/3 
          ${reverse ? "flex-col-reverse" : "flex-col"}`}
      >
        {children}
      </div>
    </section>
  );
};

export default PairWrapper;
