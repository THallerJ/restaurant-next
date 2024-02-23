type TitleSectionProps = {
  children: React.ReactNode;
  title: string;
  containerClass?: string;
  bodyClass?: string;
  id: string;
};

const TitleSection = ({
  children,
  title,
  containerClass,
  bodyClass,
  id,
}: TitleSectionProps) => {
  return (
    <section
      id={id}
      className={`flex w-full items-center justify-center ${containerClass}`}
    >
      <div className={`page-scale ${bodyClass} flex justify-center`}>
        <div className="w-full md:w-4/5">
          <h2 className="heading pb-2">{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
};

export default TitleSection;
