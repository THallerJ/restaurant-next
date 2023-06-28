"use client";
import useBackgroundImage from "../hooks/useBackgroundImage";
import Image from "next/image";

const BackgroundImage = () => {
  const backgroundImage = useBackgroundImage();

  return (
    <Image
      priority
      src={backgroundImage}
      alt="food1"
      className="breath h-full w-full object-cover brightness-[.3] 
        transition-all duration-700"
    />
  );
};

export default BackgroundImage;
