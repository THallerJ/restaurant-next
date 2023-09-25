import { useState } from "react";

const useNotify = (time?: number) => {
  const [notified, setNotified] = useState(false);
  const [timeout, setTime] = useState<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const notify = (): void => {
    if (timeout) clearTimeout(timeout);

    setNotified(true);

    setTime(
      setTimeout(
        () => {
          setNotified(false);
          return null;
        },
        time ? time : 1500,
      ),
    );
  };

  const cancel = (): void => {
    setNotified(false);
  };

  type res = [notified: boolean, notify: () => void, cancel: () => void];

  return [notified, notify, cancel] as res;
};

export default useNotify;
