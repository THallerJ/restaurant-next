import { Close } from "../assets";

type ModalProps = {
  showDialog: boolean;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  content?: React.ReactNode;
};
const Modal = ({ showDialog, setShowDialog, title, content }: ModalProps) => {
  const renderClose = (imgStyle?: string) => (
    <div className="flex justify-end">
      <button onClick={() => setShowDialog(false)}>
        <Close className={imgStyle} />
      </button>
    </div>
  );

  const renderHeader = (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-[90%] flex-col xs:w-[70%] md:w-[60%]">
        <div
          className="flex flex-row items-start
            justify-between bg-second"
        >
          <h3
            className="p-6 align-text-bottom font-bebas text-3xl
              uppercase text-dark sm:text-4xl"
          >
            {title}
          </h3>
          {renderClose("mr-3 mt-3 w-[3rem] h-[3rem]")}
        </div>
        <div
          className="max-h-[75vh] overflow-auto bg-offwhite px-6 py-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex h-full w-full items-center justify-center">
            {content}
          </div>
        </div>
      </div>
    </div>
  );

  const renderNoHeader = (
    <div className="flex h-full w-full justify-center">{content}</div>
  );

  return showDialog ? (
    <div
      className="fixed left-0 top-0 z-[1000] h-screen w-screen bg-dark/95"
      autoFocus
      onClick={() => {
        setShowDialog(false);
      }}
    >
      {!title
        ? renderClose("w-[3rem] h-[3rem] stroke-accent fill-fourth")
        : null}
      {title ? renderHeader : renderNoHeader}
    </div>
  ) : null;
};

export default Modal;
