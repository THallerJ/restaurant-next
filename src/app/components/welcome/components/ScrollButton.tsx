"use client";
import { DownArrow } from "../../../../assets";
import { useHeaderLayoutContext } from "@/app/contexts/HeaderLayoutContext";

const ScrollButton = () => {
  const { headerLayoutRef, setAutoScroll } = useHeaderLayoutContext();

  const scroll = () => {
    setAutoScroll(true);

    const scrollToY = headerLayoutRef?.current?.clientHeight || 0;

    headerLayoutRef?.current?.scrollTo({
      top: scrollToY,
      left: 0,
      behavior: "smooth",
    });

    // wait for scroll to complete
    const interval = setInterval(() => {
      if ((headerLayoutRef?.current?.scrollTop || 0) >= scrollToY) {
        clearInterval(interval);
        setAutoScroll(false);
      }
    }, 50);
  };

  return (
    <button onClick={() => scroll()}>
      <DownArrow
        className="h-12 w-12 animate-bounce duration-300 
        hover:fill-third hover:stroke-third"
      />
    </button>
  );
};

export default ScrollButton;
