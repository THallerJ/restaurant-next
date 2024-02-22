import { useState, useEffect } from "react";
import { closeHour, interval } from "@/constants";

const useCurrentDate = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    const h = currentDate.getHours();
    const m = currentDate.getMinutes();

    const hoursOutOfRange = h >= closeHour;
    const minOutofRange = h === closeHour - 1 && 60 - m < 2 * interval;

    if (hoursOutOfRange || minOutofRange) {
      const d = new Date(currentDate);
      d.setHours(25, 0);
      setCurrentDate(d);
    }
  }, [currentDate]);

  return currentDate;
};

export default useCurrentDate;
