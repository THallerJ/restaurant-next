import { Close } from "../assets";

type ModalProps = {
  showDialog: boolean;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  content?: React.ReactNode;
  hide?: boolean;
};

const Modal = ({
  showDialog,
  setShowDialog,
  title,
  content,
  hide,
}: ModalProps) => {
  const Background = () => {
    return showDialog ? (
      <div
        className="fixed left-0 top-0 z-[1000] flex h-full w-full items-center justify-center bg-dark/90"
        onClick={() => setShowDialog(false)}
      />
    ) : null;
  };

  const Header = () => {
    return (
      <div className="flex w-full items-center justify-between bg-second px-4 py-5">
        <h3 className="heading-sm">{title}</h3>
        <button onClick={() => setShowDialog(false)}>
          <Close className="h-6 w-6" />
        </button>
      </div>
    );
  };

  const Body = ({ children }: { children: React.ReactNode }) => {
    return title ? (
      <div className="h-full w-full overflow-auto bg-offwhite p-4">
        {children}
      </div>
    ) : (
      <div
        onClick={() => (hide ? setShowDialog(false) : null)}
        className="h-full w-full"
      >
        {content}
      </div>
    );
  };

  return (
    <>
      <Background />
      <div
        className={`fixed inset-0 z-[2000] m-auto flex h-full w-full flex-col items-center 
          justify-center transition-transform duration-500 sm:h-1/2 sm:w-1/2 ${
            title ? "bg-dark" : null
          } ${showDialog ? "translate-y-0" : "translate-y-[100vh]"}`}
      >
        {title ? <Header /> : null}
        <Body>{content}</Body>
      </div>
    </>
  );
};

export default Modal;
