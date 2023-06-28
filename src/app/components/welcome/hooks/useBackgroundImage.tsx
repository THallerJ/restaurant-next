"use client";
import { useState, useEffect } from "react";
import { food1, food2, food3, food4 } from "../../../../assets";

const useBackgroundImage = () => {
  const [curr, setCurr] = useState<number>(0);

  const images = [food1, food2, food3, food4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurr((prev) => {
        return prev === images.length - 1 ? 0 : prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return images[curr];
};

export default useBackgroundImage;
