"use client";
import { useState, useEffect } from "react";
import { food1, food2, food3, food4 } from "../../../../assets";
import Image from "next/image";

const BackgroundImage = () => {
  const [curr, setCurr] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurr((prev) => {
        return prev === images.length - 1 ? 0 : prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Image
      priority
      src={images[curr]}
      alt="food1"
      className="breath h-full w-full object-cover brightness-[.3] 
        transition-all duration-700"
      placeholder="blur"
    />
  );
};

export default BackgroundImage;

const images = [food1, food2, food3, food4];
