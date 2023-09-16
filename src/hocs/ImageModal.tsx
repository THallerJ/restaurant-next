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
      className="max-h-[95%] max-w-[95%] object-contain sm:max-h-[50%] sm:max-w-[50%]"
      alt="displayed-image"
    />
  ) : null;

  return (
    <Modal
      showDialog={showImage}
      setShowDialog={setShowImage}
      content={content}
    />
  );
};

export default ImageModal;
