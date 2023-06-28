import { useState, useEffect } from "react";

const useDetectScroll = (
  ref: React.MutableRefObject<HTMLDivElement | null> | null,
  threshold: number,
  enabled: boolean,
) => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const tempRef = ref?.current; // used for cleanup function
    const scrollHandler = () => {
      const scrollPos = tempRef?.scrollTop || 0;
      setScrolled(scrollPos > threshold);
    };

    if (enabled) tempRef?.addEventListener("scroll", scrollHandler);
    return () => {
      setScrolled(false);
      tempRef?.removeEventListener("scroll", scrollHandler);
    };
  }, [enabled, ref, threshold]);

  return scrolled;
};

export default useDetectScroll;
