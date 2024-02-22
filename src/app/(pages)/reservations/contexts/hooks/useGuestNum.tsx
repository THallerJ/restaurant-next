import { useState } from "react";

const useGuestNum = () => {
  const [guestNum, setGuestNum] = useState<number>();
  const [guestFlag, setGuestFlag] = useState<boolean>(false);

  const updateGuestNum = (num: number) => {
    setGuestFlag(true);
    setGuestNum(num);
  };

  return { guestNum, guestFlag, updateGuestNum };
};

export default useGuestNum;
