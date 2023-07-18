import { openHour, closeHour, interval } from "@/constants";

const formatDate = (date: Date): string => {
  let d = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  return `${year}-${month < 10 ? `0${month}` : `${month}`}-${
    d < 10 ? `0${d}` : d
  }`;
};

const compareDates = (d1: Date, d2: Date): Boolean => {
  if (
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear()
  )
    return true;

  return false;
};

const getTime = (date: Date): [number, number] => {
  const time = date.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
  });

  return [Number(time.substring(0, 2)), Number(time.substring(3, 5))];
};

const formatDateLong = (date: Date): string => {
  return date.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const formatTime = (h: number, m: number) => {
  return `${h > 12 ? h - 12 : h}:${m > 9 ? m : `0${m}`} ${
    h > 12 ? "PM" : "AM"
  }`;
};

const generateTimes = (date: Date, ignoreValid?: boolean) => {
  const [currH, currM] = getTime(date);

  const isValidTime = (h: number, m: number): boolean => {
    if (currH === h - 1) {
      const tempM = m + 60;
      if (tempM - currM >= interval) return true;
      return false;
    }

    if (currH === h && m - currM >= interval) return true;

    if (h > currH) return true;

    return false;
  };

  const helper = (
    times: [number, number][] = [],
    h = openHour,
    m = 0,
  ): [number, number][] => {
    if (h === closeHour) return times;

    if (ignoreValid || isValidTime(h, m)) times.push([h, m]);

    m = m + interval;

    if (m >= 60) h++;
    m = m % 60;

    return helper(times, h, m);
  };

  return helper();
};

export {
  formatDate,
  getTime,
  formatTime,
  generateTimes,
  compareDates,
  formatDateLong,
};
