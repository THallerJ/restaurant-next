import { navItemType } from "@/types";
import { useEffect, useState } from "react";

const usePathnameUpdated = (navItems: navItemType[], pathname: string) => {
  const [headerInputText, setHeaderInputText] = useState(navItems[0].text);

  useEffect(() => {
    for (let item of navItems) {
      if (item.to === pathname) {
        setHeaderInputText(item.text);
        break;
      }
    }
  }, [pathname, navItems]);

  return headerInputText;
};

export default usePathnameUpdated;
