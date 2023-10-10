import { breadCrumbs } from "@/types";

type CrumbProps = {
  onBack: () => void;
  crumbs: breadCrumbs[];
  selectedCount: number;
  children: React.ReactNode;
};

const CrumbContent = ({
  onBack,
  crumbs,
  selectedCount,
  children,
}: CrumbProps) => {
  return (
    <>
      {crumbs[selectedCount] && crumbs[selectedCount].content}
      <div
        className={`flex ${
          selectedCount !== 0 ? "justify-between" : "justify-end"
        }`}
      >
        {selectedCount !== 0 ? (
          <button className="btn m-4" onClick={onBack}>
            Back
          </button>
        ) : null}
        {children}
      </div>
    </>
  );
};

export default CrumbContent;
