import { useState, useEffect } from "react";

// This hook handles closing the mobile menu when a nav item is selected by the user
const useNavItemSelected = (
  setToggled: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const [navSelected, setNavSelected] = useState<boolean>(false);

  useEffect(() => {
    setToggled((prev) => {
      if (prev) return false;
      return prev;
    });
  }, [navSelected, setToggled]);

  const onNavSelected = (): void => setNavSelected((prev) => !prev);

  return onNavSelected;
};

export default useNavItemSelected;
