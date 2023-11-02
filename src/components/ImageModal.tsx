import { Modal } from "../hocs";
import Image, { StaticImageData } from "next/image";

type ImageModalProps = {
  showImage: boolean;
  setShowImage: React.Dispatch<React.SetStateAction<boolean>>;
  image: StaticImageData | undefined;
};

const ImageModal = ({ showImage, setShowImage, image }: ImageModalProps) => {
  const content = image ? (
    <Image
      src={image}
      className="h-full w-full object-contain"
      alt="displayed-image"
      placeholder="blur"
    />
  ) : null;

  return (
    <Modal
      showDialog={showImage}
      setShowDialog={setShowImage}
      content={content}
      hide
      forceCenter
    />
  );
};

export default ImageModal;
