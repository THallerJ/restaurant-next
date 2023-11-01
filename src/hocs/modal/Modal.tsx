import Background from "./components/Background";
import Body from "./components/Body";
import Header from "./components/Header";

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
  return (
    <>
      <Background showDialog={showDialog} setShowDialog={setShowDialog} />
      <div
        className={`fixed inset-0 z-[2000] m-auto flex h-full w-full flex-col items-center 
          justify-center transition-transform duration-500 sm:h-1/2 sm:w-3/4 xl:w-1/2 ${
            title ? "bg-dark" : null
          } ${showDialog ? "translate-y-0" : "translate-y-[100vh]"}`}
      >
        {title ? <Header setShowDialog={setShowDialog} title={title} /> : null}
        <Body setShowDialog={setShowDialog} hide={hide} title={title}>
          {content}
        </Body>
      </div>
    </>
  );
};

export default Modal;
