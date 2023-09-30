type BackgroundProps = {
  showDialog: boolean;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

const Background = ({ showDialog, setShowDialog }: BackgroundProps) => {
  return showDialog ? (
    <div
      className="fixed left-0 top-0 z-[1000] flex h-full w-full items-center justify-center bg-dark/90"
      onClick={() => setShowDialog(false)}
    />
  ) : null;
};

export default Background;
