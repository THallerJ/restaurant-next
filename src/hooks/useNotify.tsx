import { useState } from "react";

const useNotify = (time?: number) => {
  const [notified, setNotified] = useState(false);

  const notify = (): void => {
    setNotified((prev) => !prev);
    if (time) setTimeout(() => setNotified(false), time ? time : 1500);
  };

  type res = [
    state: boolean,
    fn: () => void,
    setState: React.Dispatch<React.SetStateAction<boolean>>,
  ];

  return [notified, notify, setNotified] as res;
};

export default useNotify;
