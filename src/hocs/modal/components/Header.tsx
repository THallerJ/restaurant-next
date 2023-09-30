import { Close } from "@/assets";

type HeaderProps = {
  title?: string;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ title, setShowDialog }: HeaderProps) => {
  return (
    <div className="flex w-full items-center justify-between bg-second px-4 py-5">
      <h3 className="heading-sm">{title}</h3>
      <button onClick={() => setShowDialog(false)}>
        <Close className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Header;
