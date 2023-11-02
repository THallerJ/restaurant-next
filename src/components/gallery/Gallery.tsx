"use client";
import { useState } from "react";
import ImageModal from "../ImageModal";
import { getLayout, getObjectPosition } from "./utils";
import { imageType, layoutType } from "../../types";
import Image, { StaticImageData } from "next/image";

type GalleryProps = {
  layout?: layoutType;
  images: imageType[];
};

const Gallery = ({ layout = "diag-end", images }: GalleryProps) => {
  const [currImage, setCurrImage] = useState<StaticImageData>();
  const [doView, setDoView] = useState(false);

  const onClick = (item: imageType) => {
    setCurrImage(item.image);
    setDoView(true);
  };

  return (
    <>
      <div className="grid w-full grid-cols-4">
        {images.map((item, i) => (
          <div
            key={`${i}gallery`}
            className={`${getLayout(i, layout)} relative h-80 overflow-hidden`}
          >
            <div
              className="peer absolute top-0 z-10 h-full w-full hover:cursor-pointer"
              style={{ boxShadow: "inset 5px 3px 10px 5px #000000" }}
              onClick={() => onClick(item)}
            />
            {item.title ? (
              <div
                className="peer absolute inset-x-0 bottom-0 z-[20] m-auto flex h-16 w-full
                  items-center justify-center bg-dark/75 hover:cursor-pointer md:w-11/12 
                  md:rounded-t-3xl"
                onClick={() => onClick(item)}
              >
                <h1 className="text-white">{item.title}</h1>
              </div>
            ) : null}
            <Image
              className="h-full w-full object-cover peer-hover:scale-[101%]"
              style={{
                filter: "box-shadow: inset 0 0 8px rgba(0,0,0,.6)",
                objectPosition: getObjectPosition(item),
              }}
              alt="gallery-image"
              placeholder="blur"
              src={item.image}
            />
          </div>
        ))}
      </div>
      <ImageModal
        showImage={doView}
        setShowImage={setDoView}
        image={currImage}
      />
    </>
  );
};

export default Gallery;
