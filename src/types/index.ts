import { StaticImageData } from "next/image";

type imageType = {
  image: StaticImageData;
  x?: number;
  y?: number;
  title?: string;
};

type layoutType =
  | "small" // each image span-1
  | "start" // first image in row span-2
  | "middle" // second image in row span-2
  | "end" // final image in row span-2
  | "diag-start" // images along diagnol span-2
  | "diag-end" // images along reverse diagnol span-2
  | "cross" // images along cross pattern span-2
  | "wide"; // all images span-2

type breadCrumbs = {
  title: string;
  content: React.ReactNode;
};

type menuItem = {
  name: string;
  details?: string;
  price: number;
};

export type { imageType, layoutType, breadCrumbs, menuItem };
