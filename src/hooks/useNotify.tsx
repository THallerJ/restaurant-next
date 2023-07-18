import { useState } from "react";

const useNotify = (time?: number) => {
  const [notified, setNotified] = useState(false);

  const notify = (): void => {
    setNotified((prev) => !prev);
    if (time) setTimeout(() => setNotified((prev) => !prev), 1500);
  };

  type res = [bool: boolean, fn: () => void];

  return [notified, notify] as res;
};

export default useNotify;
