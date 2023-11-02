import { useRef } from "react";

const useMenuRefs = () => {
  const startersRef = useRef(null);
  const breakfastRef = useRef(null);
  const lunchRef = useRef(null);
  const dinnerRef = useRef(null);
  const dessertsRef = useRef(null);
  const drinksRef = useRef(null);

  const map = new Map<string, refMenuItem>();

  const items: refMenuItem[] = [
    {
      text: "Starters",
      ref: startersRef,
    },
    {
      text: "Breakfast",
      ref: breakfastRef,
    },
    {
      text: "Lunch",
      ref: lunchRef,
    },
    {
      text: "Dinner",
      ref: dinnerRef,
    },
    {
      text: "Desserts",
      ref: dessertsRef,
    },
    {
      text: "Drinks",
      ref: drinksRef,
    },
  ];

  items.forEach((elem) => map.set(elem.text.toLowerCase(), elem));

  return map;
};

export default useMenuRefs;

type refMenuItem = {
  text: string;
  ref: React.MutableRefObject<HTMLDivElement | null> | undefined;
};
