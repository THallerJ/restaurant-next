import { useEffect } from "react";
import { useHeaderLayoutContext } from "@/app/contexts/HeaderLayoutContext";

/**
 * This hook smoothens scrolling of the Homepage component when the header
 * changes from fixed to sticky position
 */
const useSmoothScroll = (condition: boolean, offset?: number) => {
  const { getHeaderHeight, headerLayoutRef } = useHeaderLayoutContext();

  useEffect(() => {
    if (condition) {
      const currScrollPos = headerLayoutRef?.current?.scrollTop || 0;
      headerLayoutRef?.current?.scrollTo({
        top: currScrollPos + getHeaderHeight() - (offset || 0),
        left: 0,
      });
    }
  }, [condition, getHeaderHeight, offset, headerLayoutRef]);
};

export default useSmoothScroll;
