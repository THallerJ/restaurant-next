import Background from "./components/Background";
import Body from "./components/Body";
import Header from "./components/Header";

type ModalProps = {
  showDialog: boolean;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  content?: React.ReactNode;
  hide?: boolean;
  forceCenter?: boolean;
};

const Modal = ({
  showDialog,
  setShowDialog,
  title,
  content,
  hide,
  forceCenter,
}: ModalProps) => {
  return (
    <>
      <Background showDialog={showDialog} setShowDialog={setShowDialog} />
      <div
        className={`fixed z-[2000] m-auto flex w-full flex-col items-center justify-center 
          transition-transform duration-500 sm:inset-0 sm:h-1/2 sm:w-3/4 xl:w-1/2 
          ${title ? "bg-dark" : null} 
          ${showDialog ? "translate-y-0" : "translate-y-[100vh]"}  
          ${forceCenter ? "inset-0 h-full" : "bottom-0 left-0 h-5/6"} `}
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
