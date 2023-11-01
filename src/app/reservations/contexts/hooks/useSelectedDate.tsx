import { useState, useEffect, useRef } from "react";
import { openHour } from "@/constants";
import { compareDates } from "@/utils";
import { generateTimes } from "@/utils";

const useSelectedDate = (currentDate: Date) => {
  const [selectedDate, setSelectedDate] = useState<Date>(currentDate);
  const [dateFlag, setDateFlag] = useState(false); // user has selected date
  const [timeFlag, setTimeFlag] = useState(false); // user has selected time
  const [times, setTimes] = useState<[number, number][]>([]);
  const initDateRef = useRef<boolean>(false);

  const updateTime = (t: [number, number]) => {
    setSelectedDate((prev) => {
      setTimeFlag(true);
      const d = new Date(prev);
      d.setHours(t[0]);
      d.setMinutes(t[1]);
      return d;
    });
  };

  const updateDate = (value: string) => {
    initDateRef.current = false;
    setTimeFlag(false);
    setDateFlag(true);
    setSelectedDate(new Date(`${value}T${openHour - 1}:00`));
  };

  useEffect(() => {
    if (compareDates(currentDate, selectedDate) && dateFlag) {
      setSelectedDate(currentDate);
      setDateFlag(false);
    }
  }, [selectedDate, currentDate, setSelectedDate, dateFlag, setDateFlag]);

  useEffect(() => {
    const sameDates = compareDates(currentDate, selectedDate);
    setTimes(generateTimes(currentDate, sameDates ? false : true));
  }, [currentDate, selectedDate]);

  useEffect(() => {
    if (!initDateRef.current) {
      setSelectedDate((prev) => {
        const d = new Date(prev);
        if (times && times.length) {
          d.setHours(times[0][0]);
          d.setMinutes(times[0][1]);
          initDateRef.current = true;
        }
        return d;
      });
    }
  }, [times, setSelectedDate]);

  return {
    selectedDate,
    updateDate,
    updateTime,
    timeFlag,
    dateFlag,
    times,
  };
};

export default useSelectedDate;
