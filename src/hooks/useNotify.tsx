import { useState } from "react";

const useNotify = (time?: number) => {
  const [notified, setNotified] = useState(false);
  let timeout;

  const notify = (): void => {
    setNotified((prev) => !prev);
    if (time)
      timeout = setTimeout(() => setNotified(false), time ? time : 1500);
  };

  const cancel = (): void => {
    setNotified(false);
    //.clearTimeout(timeout);
  };

  type res = [
    state: boolean,
    fn: () => void,
    setState: React.Dispatch<React.SetStateAction<boolean>>,
  ];

  return [notified, notify, setNotified] as res;
};

export default useNotify;
