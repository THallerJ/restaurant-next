type BodyProps = {
  title?: string;
  hide?: boolean;
  children?: React.ReactNode;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

const Body = ({ children, title, hide, setShowDialog }: BodyProps) => {
  return title ? (
    <div className="h-full w-full overflow-auto bg-offwhite p-4">
      {children}
    </div>
  ) : (
    <div
      onClick={() => (hide ? setShowDialog(false) : null)}
      className="h-full w-full"
    >
      {children}
    </div>
  );
};

export default Body;
