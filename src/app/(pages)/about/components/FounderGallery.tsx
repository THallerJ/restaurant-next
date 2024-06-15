import { Gallery } from "@/components";
import { imageType } from "@/types";
import { Owner1, Owner2 } from "@/assets";

const FounderGallery = () => {
  return <Gallery images={founderImages} layout="wide" />;
};

export default FounderGallery;

const founderImages: imageType[] = [
  { image: Owner1, y: 5, title: "Owner Number 1" },
  { image: Owner2, x: 25, y: 20, title: "Owner Number 2" },
];
