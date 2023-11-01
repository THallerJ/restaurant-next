import { Modal } from "./";
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
    />
  ) : null;

  return (
    <Modal
      showDialog={showImage}
      setShowDialog={setShowImage}
      content={content}
      hide
    />
  );
};

export default ImageModal;
