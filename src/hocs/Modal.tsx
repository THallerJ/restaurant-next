import { Close } from "../assets";

type ModalProps = {
  showDialog: boolean;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  content?: React.ReactNode;
};
const Modal = ({ showDialog, setShowDialog, title, content }: ModalProps) => {
  /*const CloseDiv = ({ className }: { className?: string }) => (
    <div className="flex h-10 w-10 justify-end">
      <button onClick={() => setShowDialog(false)}>
        <Close className={className} />
      </button>
    </div>
  );

  const Header = () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-[90%] flex-col xs:w-[70%] md:w-[60%]">
        <div
          className="flex flex-row items-center
            justify-between bg-second py-3"
        >
          <h3
            className=" px-3 align-text-bottom font-bebas text-3xl
              uppercase text-dark sm:text-4xl"
          >
            {title}
          </h3>
          <CloseDiv className=" h-10 w-10 px-1" />
        </div>
        <div
          className="max-h-[75vh] overflow-auto bg-offwhite px-3 py-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex h-full w-full items-center justify-center">
            {content}
          </div>
        </div>
      </div>
    </div>
  );

  const NoHeader = () => (
    <div className="flex h-full w-full justify-center">{content}</div>
  );
  /*
  return showDialog ? (
    <div
      className="fixed left-0 top-0 z-[1000] h-screen w-screen bg-dark/95"
      autoFocus
      onClick={() => {
        setShowDialog(false);
      }}
    >
      {!title ? <CloseDiv className=" h-[3rem] w-[3rem] fill-fourth" /> : null}
      {title ? <Header /> : <NoHeader />}
    </div>
  ) : */
  /*
  const MobileHeader = () => {
    return (
      <div
        className={`fixed left-0 top-0 z-[2000] flex h-full w-full items-center justify-center bg-cyan-400 transition-transform duration-500 ${
          showDialog ? "translate-y-0" : "translate-y-[100vh]"
        }`}
      >
        <button onClick={() => setShowDialog(false)}>
          <Close className="h-10 w-10" />
        </button>
      </div>
    );
  }; */

  const Background = () => {
    return showDialog ? (
      <div
        className="fixed left-0 top-0 z-[1000] flex h-full w-full items-center justify-center bg-dark  sm:bg-dark/80"
        onClick={() => setShowDialog(false)}
      />
    ) : null;
  };

  const Header = () => {
    return (
      <div className="flex items-center justify-between bg-second px-2 py-3">
        <h3 className="heading-sm">{title}</h3>
        <button onClick={() => setShowDialog(false)}>
          <Close className="h-12 w-12" />
        </button>
      </div>
    );
  };

  const Body = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className=" h-full w-full bg-dark sm:h-[60%] sm:w-[60%]">
        {children}
      </div>
    );
  };

  return (
    <>
      <Background />
      <div
        className={`fixed inset-0 z-[2000] m-auto h-full w-full bg-dark transition-transform duration-500 sm:h-[60%] sm:w-[60%] ${
          showDialog ? "translate-y-0" : "translate-y-[100vh]"
        }`}
      >
        {title ? <Header /> : null}
        {content}
      </div>
    </>
  );
};

export default Modal;
